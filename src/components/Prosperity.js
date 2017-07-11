import React, { Component } from 'react';
import { Grid, Row, Col, Table, Glyphicon, Button, Label } from 'react-bootstrap';
import GameStore from '../stores/GameStore';
import GameActions from '../actions/GameActions';

export const TREASURES = [
	{ }, // dummy treasure zero (there is no treasure zero)
	{ title: "Random Item Design" },
	{ title: "Tower Shield (Item 32)" },
	{ title: "Splintmail (Item 44)" },
	{ title: "15 gold" },
	{ title: "Chainmail (Item 23)" }, // 5
	{ title: "Hooked Chain (Item 39)" },
	{ title: "Random Side Scenario" },
	{ title: "Gain 1 checkmark" },
	{ title: "Wave Crest (Item 111)" },
	{ title: "Gain 10 experience" }, // 10
	{ title: "Random Item Design" },
	{ title: "Magma Waders (Item 99)" },
	{ title: "Suffer 5 damage, gain POISON and WOUND" },
	{ title: "Gain 10 experience" },
	{ title: "Pendant of Dark Pacts (Item 45)" }, // 15
	{ title: "10 gold" },
	{ title: "20 gold" },
	{ title: "15 gold" },
	{ title: "Random Item Design" },
	{ title: "Random Item Design" }, // 20
	{ title: "Suffer 5 damage" },
	{ title: "Random Item Design" },
	{ title: "Drakescale Armor (Item 103)" },
	{ title: "Suffer 5 damage" },
	{ title: "25 gold" }, // 25
	{ title: "20 gold" },
	{ title: "Orb of Twilight (Item 122)" },
	{ title: "15 gold" },
	{ title: "Endurance Footwraps (Item 97)" },
	{ title: "Gain 1 checkmark" }, // 30
	{ title: "Random Item Design" },
	{ title: "Random Item Design" },
	{ title: "Weighted Net (Item 19)" },
	{ title: "Amulet of Life (Item 24)" },
	{ title: "Drakescale Boots (Item 98)" }, // 35
	{ title: "Rocket Boots DESIGN (Item 96)" },
	{ title: "Gain 1 checkmark" },
	{ title: "Ring of Skulls DESIGN (Item 123)" },
	{ title: "Suffer 5 damage" },
	{ title: "Random Item Design" }, // 40
	{ title: "Black Knife (Item 53)" },
	{ title: "Random Item Design" },
	{ title: "Suffer 5 damage, gain POISON and WOUND" },
	{ title: "Random Side Scenario" },
	{ title: "Random Item Design" }, // 45
	{ title: "Suffer 3 damage, gain POISON" },
	{ title: "Steam Armor (Item 104)" },
	{ title: "30 gold" },
	{ title: "New Scenario: Lost Island (17 / K-17)" },
	{ title: "Second Skin (Item 101)" }, // 50
	{ title: "Random Side Scenario" },
	{ title: "Heart of the Betrayer (Item 131)" },
	{ title: "Random Item Design" },
	{ title: "Doomed Compass (Item 124)" },
	{ title: "Gain 1 checkmark" }, // 55
	{ title: "Star Earring (Item 69)" },
	{ title: "15 gold" },
	{ title: "Drakescale Helm (Item 108)" },
	{ title: "Random Item Design" },
	{ title: "Skullbane Axe (Item 113)" }, // 60
	{ title: "Versatile Dagger (Item 40)" },
	{ title: "Helm of the Mountain (Item 110) and Mountain Hammer (Item 115)" },
	{ title: "Random Item Design" },
	{ title: "30 gold" },
	{ title: "Horned Helm DESIGN (Item 107)" }, // 65
	{ title: "Volatile Bomb (Item 33)" },
	{ title: "10 gold" },
	{ title: "Helix Ring (Item 130)" },
	{ title: "Robes of Summoning (Item 100)" },
	{ title: "Random Side Scenario" }, // 70
	{ title: "Random Side Scenario" },
	{ title: "Fueled Falchion DESIGN (Item 116)" },
	{ title: "Random Item Design" },
	{ title: "Random Item Design" },
	{ title: "A Mysterious Message (please see Scenario Book to view)" }, // 75
	{ title: "Major Stamina Potion (Item 34)" }, // 76 (K1)
	{ title: "A Mysterious Diagram (please see Kickstarter Scenario Book to view)" }, // 77 (K2)
];

export const DONATION_MILESTONES = [10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];

// index: scenario number; value: treasure tiles in that scenario
export const SCENARIO_TREAURES = [
	[], // dummy treasure tile for "scenario zero"
	[7],
	[67],
	[65],
	[38, 46],
	[4, 28], // 5
	[50],
	[],
	[51],
	[],
	[11], // 10
	[5],
	[34],
	[10],
	[26],
	[], // 15
	[1],
	[71],
	[63],
	[17],
	[60], // 20
	[15],
	[21],
	[39, 72],
	[70],
	[58], // 25
	[66],
	[],
	[32],
	[41],
	[], // 30
	[69],
	[],
	[],
	[23],
	[61], // 35
	[2],
	[49],
	[29],
	[73],
	[47], // 40
	[24],
	[30, 55],
	[35],
	[],
	[74], // 45
	[48],
	[57, 18],
	[64],
	[44],
	[], // 50
	[56],
	[],
	[31],
	[25],
	[], // 55
	[45],
	[3, 22],
	[],
	[],
	[], // 60
	[],
	[59],
	[12],
	[9],
	[], // 65
	[16, 36],
	[14],
	[33],
	[],
	[6], // 70
	[],
	[],
	[],
	[20],
	[53], // 75
	[75],
	[],
	[],
	[52],
	[], // 80
	[68],
	[62],
	[],
	[42],
	[], // 85
	[],
	[40],
	[8, 37],
	[13, 27, 43],
	[19], // 90
	[],
	[],
	[54],
	[],
	[], // 95
	[], // K1
	[],
	[],
	[],
	[], // 100 - K5
	[],
	[],
	[76],
	[],
	[77], // 105 - K6
];

// index: treasure number; value: scenario number that treasure appears in
export const TREASURE_SCENARIOS = [
	-1, // treasure zero doesn't exist
	16,
	36,
	57,
	5,
  11,
  70,
  1,
  88,
  64,
  13, // 10
  10,
  63,
  89,
  67,
  21,
  66,
  19,
  47,
  90,
  74, // 20
  22,
  57,
  34,
  41,
  54,
  14,
  89,
  5,
  38,
  42, // 30
  53,
  28,
  68,
  12,
  43,
  66,
  88,
  4,
  23,
  87, // 40
  29,
  84,
  89,
  49,
  56,
  4,
  40,
  46,
  37,
  6, // 50
  8,
  79,
  75,
  93,
  42,
  51,
  47,
  25,
  62,
  20, // 60
  35,
  82,
  18,
  48,
  3,
  26,
  2,
  81,
  31,
  24, // 70
  17,
  23,
  39,
  45,
  76, // 75
  95 + 8,// K8
  95 + 10// k10
];

class ProsperityComponent extends Component {

	constructor() {
    super();

    this.state = GameStore.getGame();

    this.onChange = this.onChange.bind(this);
  }

  increaseProsperity() {
  	GameActions.changeProsperity(1);
  }

  decreaseProsperity() {
  	GameActions.changeProsperity(-1);
  }

  donateToGreatOak(amount) {
  	let newDonations = this.state.donations + amount || 0;
  	let prosperityChange = 0;

    if (newDonations > 100) {
      newDonations = 100;
    }

    if (newDonations < 0) {
      newDonations = 0;
    }

    if (newDonations !== this.state.donations) {
    	if (DONATION_MILESTONES.indexOf(newDonations) > -1 && amount > 0) {
    		// if we've actually changed the donation level and we've reached a milestone
    		prosperityChange = 1;
    	}
    	else if (DONATION_MILESTONES.indexOf(this.state.donations) > -1 && amount < 0) {
    		prosperityChange = -1;
    	}
    }

    let newProsperity = this.state.prosperity + prosperityChange;

    if (newProsperity > 64) {
    	newProsperity = 64;
    }

    if (newProsperity < 0) {
    	newProsperity = 0;
    }

    this.setState({
      donations: newDonations,
      prosperity: newProsperity
    }, function() {
      GameActions.changeGame(this.state);
    });
  }

  componentWillMount() {
    GameStore.addGameChangeListener(this.onChange);
  }

  componentWillUnmount() {
    GameStore.removeGameChangeListener(this.onChange);
  }

  onChange() {
    this.setState(GameStore.getGame());
  }

  /* takes in the number of checkmarks and outputs the prosperity level */
  prosperityLevel(ticks) {
		switch (true) {
		    case (ticks < 4):
		        return 1;
		    case (ticks < 9):
		        return 2;
	        case (ticks < 15):
		        return 3;
	        case (ticks < 22):
		        return 4;
	        case (ticks < 30):
		        return 5;
	        case (ticks < 39):
		        return 6;
	        case (ticks < 50):
		        return 7;
	        case (ticks < 64):
		        return 8;
	        case (ticks >= 64):
		        return 9;
		    default:
		        return 1;
		}
  }

  makeTreasureColumn(number, availableTreasures, treasuresInCompleteScenarios) {
  	let unlocked = false;
  	let available = false;
  	let treasureInCompleteScenario = false;
  	let scenarioNumber = TREASURE_SCENARIOS[number];

  	let treasure = TREASURES[number];

  	// special display of scenario number for Kickstarter scenarios
  	if (scenarioNumber >= 96 && scenarioNumber <= 105) {
  		scenarioNumber = "K" + (scenarioNumber - 95);
  	}

  	if (availableTreasures.indexOf(number) >= 0) {
  		available = true;
  	}

  	if (treasuresInCompleteScenarios.indexOf(number) >= 0) {
  		treasureInCompleteScenario = true;
  	}

  	if (this.state.treasuresUnlocked.indexOf(number) >= 0) {
  		// we have this treasure
  		unlocked = true;
  	}

  	let buttonText = number;
  	if (unlocked) {
  		buttonText += " - " + treasure.title;
  	}

  	let buttonStyle = "";
  	if (unlocked) {
  		buttonStyle = "btn-scoundrel";
  	}
  	else if (treasureInCompleteScenario) {
  		buttonStyle = "btn-lightning";

  		// also add some text to button to let user know which scenario they missed treasure from
  		buttonText += " - Missed in scenario " + scenarioNumber;
  	}
  	else if (available) {
  		buttonStyle = "btn-doomstalker";
  	}

  	return (
  		<Col key={number} xs={12} md={4} lg={3} >
  			<Button className={buttonStyle} onClick={() => this.toggleTreasure(number, availableTreasures)} block>{buttonText}</Button>
  		</Col>
		);
  }

  toggleTreasure(number, availableTreasures) {
  	let treasuresUnlockedCopy = this.state.treasuresUnlocked;

  	let indexOfScenarioToRemoveFromUnlocked = treasuresUnlockedCopy.indexOf(number);

  	if (indexOfScenarioToRemoveFromUnlocked >= 0) {
  		// we already unlocked this treasure: mark it as locked again (this allows users to undo their mistakes)
  		treasuresUnlockedCopy.splice(indexOfScenarioToRemoveFromUnlocked, 1);
  	}
  	else if (availableTreasures.indexOf(number) >= 0) {
  		// we have not already unlocked this treasure, and it is actually available to us based on unlocked scenarios: mark it as unlocked
  		treasuresUnlockedCopy.push(number);
  	}

  	// otherwise, if it's not yet unlocked but we don't have access to it: do nothing (the user must unlock the relevant scenario first)

  	this.setState({
      treasuresUnlocked: treasuresUnlockedCopy
    }, function() {
      GameActions.changeGame(this.state);
    });
  }

  makeTreasuresInCompleteScenarios() {
  	let treasuresInCompleteScenarios = [];

  	for (let i=0; i<this.state.scenariosComplete.length; i++) {
  		let scenarioNumber = this.state.scenariosComplete[i];

  		// add all the treasures from this scenario to the list
  		treasuresInCompleteScenarios = treasuresInCompleteScenarios.concat(SCENARIO_TREAURES[scenarioNumber]);
  	}

  	return treasuresInCompleteScenarios;
  }

  makeAvailableTreasures() {
  	let availableTreasures = [];

  	for (let i=0; i<this.state.scenariosUnlocked.length; i++) {
  		let scenarioNumber = this.state.scenariosUnlocked[i];

  		// add all the treasures from this scenario to the list
  		availableTreasures = availableTreasures.concat(SCENARIO_TREAURES[scenarioNumber]);
  	}

  	return availableTreasures;
  }

  render() {
  	// treasures
  	let treasureColumns = [];

  	let availableTreasures = this.makeAvailableTreasures();
  	let treasuresInCompleteScenarios = this.makeTreasuresInCompleteScenarios();

  	for (let i=1; i<TREASURES.length; i++) {
  		treasureColumns.push(this.makeTreasureColumn(i, availableTreasures, treasuresInCompleteScenarios));
  	}

  	// prosperity
  	let level = this.prosperityLevel(this.state.prosperity);
  	let unlocked = <Glyphicon glyph="check" />

  	let prosperityChecks = [];

  	for (let i=1; i<=this.state.prosperity; i++) {
			if ([4, 9, 15, 22, 30, 39, 50, 64].indexOf(i) > -1) {
				prosperityChecks.push(<Glyphicon className="milestone" glyph="check" key={i} />);
			}
			else {
				prosperityChecks.push(<Glyphicon glyph="check" key={i} />);	
			}
  	}

  	for (let i=this.state.prosperity + 1; i<=64; i++) {
			if ([4, 9, 15, 22, 30, 39, 50, 64].indexOf(i) > -1) {
				prosperityChecks.push(<Glyphicon className="milestone" glyph="unchecked" key={i} />);
			}
			else {
				prosperityChecks.push(<Glyphicon glyph="unchecked" key={i} />);	
			}
  	}

  	let donationChecks = [];

  	for (let i=1; i<=this.state.donations && (this.state.donations >= 10 || i <=10); i++) {
			if (DONATION_MILESTONES.indexOf(i) > -1) {
				donationChecks.push(<Glyphicon className="milestone" glyph="check" key={i} />);
			}
			else {
				donationChecks.push(<Glyphicon glyph="check" key={i} />);	
			}
  	}

  	for (let i=this.state.donations + 1; i<=100 && (this.state.donations >= 10 || i <=10); i++) {
			if (DONATION_MILESTONES.indexOf(i) > -1) {
				donationChecks.push(<Glyphicon className="milestone" glyph="unchecked" key={i} />);
			}
			else {
				donationChecks.push(<Glyphicon glyph="unchecked" key={i} />);
			}
  	}

    return (
      <div className="container">
      	<Grid>
	      	<Row>
	      		<Col xs={12} md={12}>
	      			<p>Use the buttons to keep track of the current <strong>prosperity level</strong> of <em>Gloomhaven</em>. As you reach new prosperity levels, the key below will let you know which items have been unlocked (the number refer to the <strong>big numbers</strong> on the backs of the cards, not the small number on the front).</p>
	      			{this.state.donations >= 10 &&
	      				<p>When donating to the <strong>Sanctuary of the Great Oak</strong>, the prosperity level will automatically be adjusted when you reach a new milestone.</p>
	      			}
	      			<p>Please note that the prosperity track is correct for the <strong>second printing</strong> of Gloomhaven. The first printing has one extra checkbox per prosperity level.</p>
	      		</Col>
	      	</Row>
      		<Row>
      			<Col xs={12} md={8} className="prosperity-checks-container">
      				<Row>
      					<Col xs={12} md={12} className="text-center">
									<h2>Prosperity</h2>
								</Col>
								<Col xs={12} md={12} className="prosperity-label-container text-center">
									<Label className="label-xxlarge label-brute">{level}</Label>
								</Col>
      					<Col xs={6} md={6}>
      						<Button href="#" className="btn-lightning" block onClick={this.decreaseProsperity.bind(this)}><Glyphicon glyph="minus" /></Button>
      					</Col>
      					<Col xs={6} md={6}>
      						<Button href="#" className="btn-scoundrel" block onClick={this.increaseProsperity.bind(this)}><Glyphicon glyph="plus" /></Button>
      					</Col>
      				</Row>
							<Row className="prosperity-checks-list">
								<Col xs={12} md={12}>
									{prosperityChecks}
								</Col>
							</Row>
							<Row>
      					<Col xs={12} md={12} className="text-center">
									<h2>Sanctuary of the Great Oak</h2>
								</Col>
								<Col xs={12} md={12} className="prosperity-label-container text-center">
									<Label className="label-xxlarge label-brute">{this.state.donations * 10}</Label>
								</Col>
      					<Col xs={6} md={6}>
      						<Button href="#" className="btn-lightning" block onClick={() => this.donateToGreatOak(-1)}><Glyphicon glyph="minus" /></Button>
      					</Col>
      					<Col xs={6} md={6}>
      						<Button href="#" className="btn-scoundrel" block onClick={() => this.donateToGreatOak(1)}><Glyphicon glyph="plus" /></Button>
      					</Col>
      				</Row>
							<Row className="prosperity-checks-list">
								<Col xs={12} md={12}>
									{donationChecks}
								</Col>
							</Row>
      			</Col>
      			<Col xs={12} md={4}>
      				<Table striped condensed hover>
						    <thead>
						      <tr>
						        <th>Item Numbers</th>
						        <th>Unlocked</th>
						      </tr>
						    </thead>
						    <tbody>
						      <tr>
						        <td>001 - 014</td>
						        <td>{level >= 1 && unlocked}</td>
						      </tr>
						      <tr>
						        <td>015 - 021</td>
						        <td>{level >= 2 && unlocked}</td>
						      </tr>
						      <tr>
						        <td>022 - 028</td>
						        <td>{level >= 3 && unlocked}</td>
						      </tr>
						      <tr>
						        <td>029 - 035</td>
						        <td>{level >= 4 && unlocked}</td>
						      </tr>
						      <tr>
						        <td>036 - 042</td>
						        <td>{level >= 5 && unlocked}</td>
						      </tr>
						      <tr>
						        <td>043 - 049</td>
						        <td>{level >= 6 && unlocked}</td>
						      </tr>
						      <tr>
						        <td>050 - 056</td>
						        <td>{level >= 7 && unlocked}</td>
						      </tr>
						      <tr>
						        <td>057 - 063</td>
						        <td>{level >= 8 && unlocked}</td>
						      </tr>
						      <tr>
						        <td>064 - 070</td>
						        <td>{level >= 9 && unlocked}</td>
						      </tr>
						    </tbody>
						  </Table>
      			</Col>
      		</Row>
      		<Row>
      			<Col xs={12} md={12} className="text-center">
      				<h2>Treasure</h2>
      			</Col>
      		</Row>
      		<Row>
	      		<Col xs={12} md={12}>
	      			<p>Trying to remember what treasure overlay tiles you've missed? Look no further!</p>
	      			<p>Any scenarios you have <strong>marked as unlocked</strong> on the <a href="/scenarios">Scenario</a> page will be marked as available below, allowing you to select them. Clicking on an available treasure button will mark it as discovered and <strong>reveal its contents</strong>.</p>
	      			<p>Undiscovered treasures in scenarios you have <strong>marked as complete</strong> on the <a href="/scenarios">Scenario</a> page will be shown in red below.</p>
	      		</Col>
	      	</Row>
      		<Row className="treasure-key">
      			<Col xs={12} md={4} className="text-center">
      				<Button className="btn-scoundrel">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Treasure discovered
      			</Col>
      			<Col xs={12} md={4} className="text-center">
      				<Button className="btn-doomstalker">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Treasure in available scenario
      			</Col>
      			<Col xs={12} md={4} className="text-center">
      				<Button className="btn-lightning">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Missed Treasure in complete scenario
      			</Col>
      		</Row>
      		<Row className="treasure-container">
      			{treasureColumns}
      		</Row>
      	</Grid>
      </div>
    );
  }
}

export default ProsperityComponent;