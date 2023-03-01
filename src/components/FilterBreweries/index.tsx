import { useProvider } from "../../contexts/UserContext";
import { FormS } from "./styled";

const FilterBreweries = () => {
  const { setFilterBreweries } = useProvider();

  const options = [
    { value: "", label: "Select an option" },
    { value: "micro", label: "micro" },
    { value: "nano", label: "nano" },
    { value: "regional", label: "regional" },
    { value: "brewpub", label: "brewpub" },
    { value: "large", label: "large" },
    { value: "planning", label: "planning" },
    { value: "bar", label: "bar" },
    { value: "contract", label: "contract" },
    { value: "proprieter", label: "proprieter" },
    { value: "closed", label: "closed" },
  ];

  const handleSelect = (value: string) => {
    if (!value) {
      setFilterBreweries("");
    } else {
      setFilterBreweries(`&&by_type=${value}`);
    }
  };

  return (
    <FormS>
      <label>Filter:</label>
      <select onChange={(e) => handleSelect(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormS>
  );
};

export default FilterBreweries;
