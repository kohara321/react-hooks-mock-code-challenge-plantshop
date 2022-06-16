import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => setPlants(data));
  }, []);

  function handleNewPlant(newPlant) {
    const newPlantArr = [...plants, newPlant];
    setPlants(newPlantArr);
  }

  const displayPlant = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm plants={plants} onAddPlant={handleNewPlant} />
      <Search onSearch={setSearch} search={search} />
      <PlantList plants={displayPlant} />
    </main>
  );
}

export default PlantPage;
