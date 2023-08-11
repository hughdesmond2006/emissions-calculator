import { Card, CardBody, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { trip } from "../App";

interface props {
  trip: trip;
}

const TripCard = ({ trip }: props) => {
  const countryExt = trip.countryCount > 1 ? "ies" : "y";
  const dayExt = trip.dayCount > 1 ? "s" : "";
  const emissions =
    trip.emissionsOffset < 1
      ? trip.emissionsOffset * 1000
      : trip.emissionsOffset;
  const emissionsExt = trip.emissionsOffset < 1 ? "kg" : "t";

  return (
    <Card
      key={trip.id}
      size={{ md: "md", lg: "lg", base: "md" }}
      style={{
        margin: "16px",
        borderRadius: "16px",
      }}
    >
      <CardBody
        fontSize="md"
        color="white"
        style={{
          borderRadius: "16px",
          padding: "8px",
          margin: "0",
          fontWeight: "500",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing="2"
          style={{
            backgroundImage: `url('${trip.imageURL}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundBlendMode: "darken",
            backgroundColor: "rgb(0 0 0 / 20%)",
            paddingLeft: "30px",
            paddingRight: "30px",
            borderRadius: "8px",
            width: "100%",
            height: "100%",
          }}
          align="center"
          justify="center"
        >
          <Heading
            fontSize={{ base: "16px", lg: "20px" }}
            style={{
              fontWeight: "500",
              marginBottom: "0px",
            }}
          >
            {trip.name}
          </Heading>
          <Heading
            fontSize={{ base: "12px", lg: "14px" }}
            style={{
              fontWeight: "300",
              marginBottom: "16px",
            }}
          >
            {trip.countryCount} countr{countryExt}, {trip.dayCount} day
            {dayExt}
          </Heading>
          <Flex
            width="100%"
            justify="space-between"
            bg="bg.gray"
            style={{
              borderRadius: "12px",
              padding: "12px",
              fontSize: "0.9rem",
              fontWeight: "300",
            }}
          >
            <Text fontSize={{ base: "12px", lg: "14px" }}>
              Emissions offset:
            </Text>
            <Text fontSize={{ base: "12px", lg: "14px" }}>
              <span>
                <span data-testid="emissions">{emissions}</span> {emissionsExt}{" "}
                CO<sub>2</sub>
                <small>E</small>
              </span>
            </Text>
          </Flex>
        </Stack>
        <Flex
          width="100%"
          justify="space-between"
          color="black"
          style={{
            backgroundColor: "white",
            borderRadius: "8px 8px 0 0",
            padding: "16px 30px 16px 30px",
            fontSize: "0.8rem",
            fontWeight: "500",
            position: "absolute",
            bottom: "8px",
            width: "80%",
            height: "20%",
          }}
        >
          <Text fontSize={{ base: "12px", lg: "14px" }}>Trip rating:</Text>
          <Flex align="center" justify="center">
            <StarRatings
              rating={trip.rating}
              starRatedColor="#F0D51D"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
              starSpacing="2px"
            />
            <Text
              fontSize={{ base: "12px", lg: "14px" }}
              style={{ marginLeft: "8px" }}
              data-testid="rating"
            >
              {trip.rating}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TripCard;
