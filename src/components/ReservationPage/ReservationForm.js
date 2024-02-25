import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useAlertContext } from "../../context/AlertContext";
import useSubmit from "../../hooks/useSubmit";

const ReservationForm = () => {
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 12; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const formattedMinute = minute === 0 ? "00" : minute;
        const time = `${formattedHour}:${formattedMinute}`;
        options.push(time);
      }
    }
    return options;
  };

  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
      nGuests: "",
      date: "",
      time: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://www.sahilearwand.com/api", values);
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("name is required"),
      email: Yup.string()
        .email("invalid email address")
        .required("email is required"),
      phone: Yup.number().required("phone is required"),
      nGuests: Yup.string().required("no of guests is required"),
      date: Yup.string().required("date is required"),
      time: Yup.string().required("time is required"),
      type: Yup.string(),
      comment: Yup.string()
        .required("your message required")
        .min(25, "Must be at least 25 characters"),
    }),
  });

  useEffect(() => {
    if (response.type === "success") {
      onOpen("success", response.message);
      formik.resetForm();
    } else if (response.type === "error") {
      onOpen("error", response.message);
    }
  }, [response]);

  return (
    <VStack w="100%" mt="2rem" alignItems="center">
      <Box
        p={6}
        borderRadius="0.5rem"
        w="100%"
        background="#485f57"
        color="white"
      >
        <Heading as="h1" color="#f4ce13" id="contactme-section" mb="1rem">
          Reserve a Table
        </Heading>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            >
              <FormLabel htmlFor="firstName">Name</FormLabel>
              <Input
                {...formik.getFieldProps("firstName")}
                id="firstName"
                name="firstName"
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.email && formik.errors.email}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                {...formik.getFieldProps("email")}
                id="email"
                name="email"
                type="email"
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.phone && formik.errors.phone}
            >
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                {...formik.getFieldProps("phone")}
                id="phone"
                name="phone"
                type="number"
              />
              <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.nGuests && formik.errors.nGuests}
            >
              <FormLabel htmlFor="nGuests">No of guests</FormLabel>
              <Input
                {...formik.getFieldProps("nGuests")}
                id="nGuests"
                name="nGuests"
                type="number"
              />
              <FormErrorMessage>{formik.errors.nGuests}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input
                {...formik.getFieldProps("date")}
                id="date"
                name="date"
                type="date"
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.nGuests && formik.errors.nGuests}
            >
              <FormLabel htmlFor="time">Time</FormLabel>
              <Select id="time" name="time" {...formik.getFieldProps("time")}>
                {generateTimeOptions().map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Select>
              <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="occasion">Type of enquiry</FormLabel>
              <Select
                id="occasion"
                name="occasion"
                {...formik.getFieldProps("occasion")}
                defaultValue="Birthday"
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Select>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.comment && formik.errors.comment}
            >
              <FormLabel htmlFor="comment">Your message</FormLabel>
              <Textarea
                id="comment"
                name="comment"
                {...formik.getFieldProps("comment")}
                height={250}
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              style={{
                backgroundColor: "#f4ce13",
                color: "#485f57",
                padding: "10px 20px",
                borderRadius: "0.5rem",
                width: "100%",
                cursor: "pointer",
              }}
              isLoading={isLoading}
              disabled={!formik.isValid}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default ReservationForm;
