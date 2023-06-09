import { useState } from "react";

import './Filters.scss'

const Filters = ({characters, setFilteredCharacters}) => {

    const [selectedLocalisation, setSelectedLocalisation] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [selectedSkinColor, setSelectedSkinColor] = useState("");
    const [selectedHairColor, setSelectedHairColor] = useState("");
    const [selectedEyeColor, setSelectedEyeColor] = useState("");
    const [selectedWeight, setSelectedWeight] = useState("");
    const [selectedHeight, setSelectedHeight] = useState("");
    // const [test, setTest] = useState([]);


    const handleLocalisationChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedLocalisation(selectedValue);
        handleFilter(selectedValue, selectedGender, selectedSpecies, selectedSkinColor, selectedHairColor, selectedEyeColor, selectedWeight, selectedHeight);
    };
    
    const handleGenderChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedGender(selectedValue);
        handleFilter(selectedLocalisation, selectedValue, selectedSpecies, selectedSkinColor, selectedHairColor, selectedEyeColor, selectedWeight, selectedHeight);
    };
    
    const handleSpeciesChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedSpecies(selectedValue);
        handleFilter(selectedLocalisation, selectedGender, selectedValue, selectedSkinColor, selectedHairColor, selectedEyeColor, selectedWeight, selectedHeight);
    }
    
    const handleSkinColorChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedSkinColor(selectedValue);
        handleFilter(selectedLocalisation, selectedGender, selectedSpecies, selectedValue, selectedHairColor, selectedEyeColor, selectedWeight, selectedHeight);
    }
    
    const handleHairColorChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedHairColor(selectedValue);
        handleFilter(selectedLocalisation, selectedGender, selectedSpecies, selectedSkinColor, selectedValue, selectedEyeColor, selectedWeight, selectedHeight);
    }
    
    
    const handleEyeColorChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedEyeColor(selectedValue);
        handleFilter(selectedLocalisation, selectedGender, selectedSpecies, selectedSkinColor, selectedHairColor, selectedValue, selectedWeight, selectedHeight);
    }
    
    const handleWeightChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedWeight(selectedValue === "" ? "" : parseFloat(selectedValue));
        handleFilter(selectedLocalisation, selectedGender, selectedSpecies, selectedSkinColor, selectedHairColor, selectedEyeColor, selectedValue, selectedHeight)
    }
    
    const handleHeightChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedHeight(selectedValue === "" ? "" : parseFloat(selectedValue));
        handleFilter(selectedLocalisation, selectedGender, selectedSpecies, selectedSkinColor, selectedHairColor, selectedEyeColor, selectedWeight, selectedValue)
    }





    const handleFilter = (localisation, gender, species, skinColor, hairColor, eyeColor, weight, height) => {
        let filteredResult = [...characters];
        if (localisation) {
            filteredResult = filteredResult.filter(
                (charac) => charac.homeworld === localisation
            );
        }

        if (gender) {

            filteredResult = filteredResult.filter(
                (charac) => charac.gender === gender
            )
        }

        if (species) {
            filteredResult = filteredResult.filter(
                (charac) => charac.species === species
            );
        }

        if (skinColor) {
            filteredResult = filteredResult.filter(
                (charac) => charac.skinColor === skinColor
            );
        }

        if (hairColor) {
            filteredResult = filteredResult.filter(
                (charac) => charac.hairColor === hairColor
            );
        }

        if (eyeColor) {
            filteredResult = filteredResult.filter(
                (charac) => charac.eyeColor === eyeColor
            );
        }
        if (weight !== "") {
            filteredResult = filteredResult.filter((charac) => {
                let characWeight = parseFloat(charac.mass);
                if (isNaN(characWeight)) return false;
                if (weight <= 49) {
                    return characWeight <= 49;
                } else if (weight >= 50 && weight <= 64) {
                    return characWeight >= 50 && characWeight <= 64;
                } else if (weight >= 65 && weight <= 80) {
                    return characWeight >= 65 && characWeight <= 80;
                } else if (weight >= 81 && weight <= 95) {
                    return characWeight >= 81 && characWeight <= 95;
                } else if (weight >= 96) {
                    return characWeight >= 96;
                }
            });
        } else {
            filteredResult = filteredResult.filter((charac) => {
                let characWeight = parseFloat(charac.mass);
                return !isNaN(characWeight);
            });
        }
        
        if (height !== "") {
            filteredResult = filteredResult.filter((charac) => {
                let characHeight = parseFloat(charac.height);
                if (height <= 1.45) {
                    return characHeight <= 1.45;
                } else if (height >= 1.45 && height <= 1.59) {
                    return characHeight >= 1.45 && characHeight <= 1.59;
                } else if (height >= 1.60 && height <= 1.74) {
                    return characHeight >= 1.60 && characHeight <= 1.74;
                } else if (height >= 1.75 && height <= 1.89) {
                    return characHeight >= 1.75 && characHeight <= 1.89;
                } else if (height >= 1.90) {
                    return characHeight >= 1.90;
                }
            });
        }
                

        setFilteredCharacters(filteredResult);

      

    };

    return (
        <div className="toggleSelect">
            <label htmlFor="localisation">LOCALISATIONS</label>
            <select id="localisation" value={selectedLocalisation} onChange={handleLocalisationChange}>
                <option value="">All Planets</option>
                <option value="tatooine">Tatooine</option>
                <option value="naboo">Naboo</option>
                <option value="alderaan">Alderann</option>
                <option value="stewjon">Stewjon</option>
                <option value="eriadu">Eriadu</option>
                <option value="kashyyyk">Kashyyyk</option>
                <option value="corellia">Corellia</option>
                <option value="rodia">Rodia</option>
                <option value="bestine">Bestine</option>
                <option value="kamino">Kamino</option>
                <option value="trandosha">Trandosha</option>
                <option value="socorro">Socorro</option>
                <option value="bespin">Bespin</option>
                <option value="mon cala">Mon Cala</option>
                <option value="chandrila">Chandrila</option>
                <option value="endor">Endor</option>
                <option value="sullust">Sullust</option>
                <option value="coruscant">Coruscant</option>
                <option value="neimoidia">Neimoidia</option>
                <option value="toydaria">Toydaria</option>
                <option value="malastare">Malastare</option>
                <option value="dathomir">Dathomir</option>
                <option value="ryloth">Ryloth</option>
                <option value="aleen">Aleen</option>
                <option value="troiken">Troiken</option>
                <option value="tund">Tund</option>
                <option value="haruun kal">Haruun kal</option>
                <option value="cerea">Cerea</option>
                <option value="glee anselm">Glee Anselm</option>
                <option value="nar shaddaa">Nar Shaddaa</option>
                <option value="quermia">Quermia</option>
                <option value="iktotch">Iktotch</option>
                <option value="champala">Champala</option>
                <option value="geonosis">Geonosis</option>
                <option value="mirial">Mirial</option>
                <option value="concord dawn">Concord Dawn</option>
                <option value="zolan">Zolan</option>
                <option value="ojom">Ojom</option>
                <option value="skako">Skako</option>
                <option value="scipio">Scipio</option>
                <option value="shili">Shili</option>
                <option value="kalee">Kalee</option>
                <option value="utapau">Utapau</option>
                <option value="jakku">Jakku</option>
                <option value="yavin">Yavin 4</option>
                <option value="parnassos">Parnassos</option>

            </select>

            <label htmlFor="gender">GENDERS</label>
            <select id="gender" value={selectedGender} onChange={handleGenderChange}>
                <option value="">All Genders</option>
                <option value="male">Males</option>
                <option value="female">Females</option>
            </select>

            <label htmlFor="species">SPECIE</label>
            <select id="species" value={selectedSpecies} onChange={handleSpeciesChange}>
                <option value="">All Species</option>
                <option value="human">Humans</option>
                <option value="droid">Droids</option>
                <option value="wookiee">Wookies</option>
                <option value="rodian">Rodians</option>
                <option value="hutt">Hutts</option>
                <option value="yoda's species">Yoda's</option>
                <option value="trandoshan">trandoshans</option>
                <option value="mon calamari">Mon Calamaris</option>
                <option value="ewok">Ewoks</option>
                <option value="sullustan">Sullustans</option>
                <option value="neimoidian">Neimoidians</option>
                <option value="toydarian">Toydarians</option>
                <option value="dug">Dugs</option>
                <option value="dathomirian zabrak">Dathomirian zabraks</option>
                <option value="twi'lek">Twi'leks</option>
                <option value="aleena">Aleenas</option>
                <option value="xexto">Xextos</option>
                <option value="toong">Toongs</option>
                <option value="cerean">Cereans</option>
                <option value="nautolan">Nautolans</option>
                <option value="iridonian zabrak">Iridonian zabraks</option>
                <option value="tholothian">Tholothians</option>
                <option value="iktotchi">Iktotchis</option>
                <option value="quermian">Quermians</option>
                <option value="kel dor">Kel dors</option>
                <option value="chagrian">Chagrians</option>
                <option value="geonosian">Geonosians</option>
                <option value="mirialan">Mirialans</option>
                <option value="clawdite">Clawdites</option>
                <option value="besalisk">Besalisks</option>
                <option value="kaminoan">Kaminoans</option>
                <option value="skakoan">Skakoans</option>
                <option value="muun">Muuns</option>
                <option value="togruta">Togrutas</option>
                <option value="kaleesh">Kaleeshs</option>
                <option value="umbaran">Umbarans</option>
                <option value="pau'an">Pau'ans</option>
            </select>

            <label htmlFor="skinColor">SKIN COLOR</label>
            <select id="skinColor" value={selectedSkinColor} onChange={handleSkinColorChange}>
                <option value="">All Skin Colors</option>
                <option value="light">Light</option>
                <option value="gold">Gold</option>
                <option value="white, blue">White, Blue</option>
                <option value="light, later pale">Light, Later Pale</option>
                <option value="white, red">White, Red</option>
                <option value="green">Green</option>
                <option value="green and tan">Green and tan</option>
                <option value="fair, later pale">Fair, Later Pale</option>
                <option value="metal">Metal</option>
                <option value="dark">Dark</option>
                <option value="brown mottle">Brown Mottle</option>
                <option value="brown">Brown</option>
                <option value="fair">Fair</option>
                <option value="orange and white">Orange and White</option>
                <option value="purple and white">Purple and White</option>
                <option value="blue">Blue</option>
                <option value="purple and beige">Purple and Beige</option>
                <option value="blue-gray, yellow, white">Blue-gray, Yellow, White</option>
                <option value="white, brown, purple">White, Brown, Purple</option>
                <option value="yellow">Yellow</option>
                <option value="pasty white">Pasty White</option>
                <option value="orange">Orange</option>
                <option value="tan-brown">Tan-Brown</option>
                <option value="silver, red">Silver, Red</option>
                <option value="white">White</option>
            </select>

            <label htmlFor="hairColor">HAIR COLOR</label>
            <select id="hairColor" value={selectedHairColor} onChange={handleHairColorChange}>
                <option value="">All Hairs Colors</option>
                <option value="brown">Brown</option>
                <option value="blond">Blond</option>
                <option value="brown, later graying">Brown, later graying</option>
                <option value="brown, later gray">Brown, later gray</option>
                <option value="black">Black</option>
                <option value="light brown, later whitey">Light Brown, later white</option>
                <option value="auburn, later gray">Auburn, later gray</option>
                <option value="white">White</option>
                <option value="red, later gray and white">Red, later gray and white</option>
                <option value="auburn">Auburn</option>
                <option value="light brown">Light Brown</option>
                <option value="black, later whith flecks of gray">Black, later whith flecks of gray</option>
                <option value="black; later none">Black;later none</option>
                <option value="brown-black">Brown-black</option>
                <option value="gold">Gold</option>
                
            </select>

            <label htmlFor="eyeColor">EYE COLOR</label>
            <select id="eyeColor" value={selectedEyeColor} onChange={handleEyeColorChange}>
                <option value="">All Eyes Colors</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
                <option value="blue, yellow (dark side)">Blue, Yellow (dark side)</option>
                <option value="brown">Brown</option>
                <option value="hazel">Hazel</option>
                <option value="gray-blue">Gray-blue</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
                <option value="green-gold">Green-gold</option>
                <option value="blue; yellow/red (dark side)">Blue; Yellow/Red (dark side)</option>
                <option value="pale blue-green">Pale blue-green</option>
                <option value="brownish black">Brownish black</option>
                <option value="black">Black</option>
                <option value="pink">Pink</option>
                <option value="royal-blue">Royal-blue</option>
                <option value="black with white pupils">Black with white pupils</option>     
                <option value="red, blue">Red, Blue</option>
                <option value="bluish green">Bluish green</option>
                <option value="gold">Gold</option>
                <option value="white">White</option>
            </select>

            <label htmlFor="weight">WEIGHT</label>
            <select id="mass" value={selectedWeight} onChange={handleWeightChange}>
                <option value="">All Weights</option>
                <option value="49">49 or less</option>
                <option value="56">50 to 64</option>
                <option value="70">65 to 79</option>
                <option value="85">80 to 94</option>
                <option value="96">95 or more</option>
                
            </select>

            <label htmlFor="height">HEIGHT</label>
            <select id="height" value={selectedHeight} onChange={handleHeightChange}>
                <option value="">All Heights</option>
                <option value="1.45">1.45 or less</option>
                <option value="1.55">1.45 to 1.59</option>
                <option value="1.65">1.60 to 1.74</option>
                <option value="1.76">1.75 to 1.89</option>
                <option value="1.91">1.90 or more</option>

            </select>
            
        </div>
    )
}


export default Filters;