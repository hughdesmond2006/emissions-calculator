import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import { getTrips } from "./util/api";
import TripCard from "./components/TripCard";

export interface trip {
  id: number;
  name: string;
  countryCount: number;
  dayCount: number;
  emissionsOffset: number;
  rating: number;
  imageURL?: URL;
}

const initData = [
  {
    id: 0,
    name: "",
    countryCount: 0,
    dayCount: 0,
    emissionsOffset: 0,
    rating: 0,
  },
];

const App = () => {
  const [data, setData] = useState<trip[]>(initData);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  console.log("data", data);

  // init load
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      setData(await getTrips());
    } catch (e) {
      console.log("Error!", e);
    }

    setLoading(false);
  };

  return (
    <Flex direction="column">
      <Flex direction="column" align={"center"}>
        <InputGroup
          style={{
            width: "200px",
            marginTop: "24px",
            marginBottom: "12px",
          }}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon
              color="gray.300"
              style={{
                marginTop: "8px",
              }}
            />
          </InputLeftElement>
          <Input
            size="lg"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            style={{
              color: "#7b89a5",
            }}
          />
        </InputGroup>
      </Flex>
      <Flex direction="row" wrap="wrap" justify={"center"}>
        {data &&
          data
            .filter((t) =>
              t.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((trip) => <TripCard trip={trip} />)}
      </Flex>
    </Flex>
  );
};

export default App;
