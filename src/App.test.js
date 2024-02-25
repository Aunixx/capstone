import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReservationForm from "./components/ReservationPage/ReservationForm";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/AlertContext";

const useRender = ({ children }) => {
  render(
    <ChakraProvider>
      <AlertProvider>{children}</AlertProvider>
    </ChakraProvider>
  );
};

const TestWrapper = ({ children }) => (
  <ChakraProvider>
    <AlertProvider>{children}</AlertProvider>
  </ChakraProvider>
);

describe("ReservationForm", () => {
  it("renders without crashing", () => {
    render(<ReservationForm />, {
      wrapper: TestWrapper,
    });
  });

  it("checks all the fields", async () => {
    render(<ReservationForm />, {
      wrapper: TestWrapper,
    });

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/No of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Type of enquiry/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your message/i)).toBeInTheDocument();
  });

  it("allows user to fill and submit the form", async () => {
    render(<ReservationForm />, {
      wrapper: TestWrapper,
    });

    userEvent.type(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    userEvent.type(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    userEvent.type(screen.getByLabelText(/Phone/i), {
      target: { value: "1234567890" },
    });
    userEvent.type(screen.getByLabelText(/No of guests/i), {
      target: { value: "4" },
    });
    userEvent.type(screen.getByLabelText(/Date/i), {
      target: { value: "2024-02-28" },
    });
    userEvent.type(screen.getByLabelText(/Time/i), {
      target: { value: "13:00" },
    });
    userEvent.type(screen.getByLabelText(/Type of enquiry/i), {
      target: { value: "Birthday" },
    });
    userEvent.type(screen.getByLabelText(/Your message/i), {
      target: { value: "Test message test message Test message" },
    });

    await userEvent.click(screen.getByText(/Submit/i));

    waitFor(() => {
      expect(screen.getByText("Confirmation")).toBeInTheDocument();
    });
  });

  it("validates form fields correctly", async () => {
    render(<ReservationForm />, {
      wrapper: TestWrapper,
    });

    await userEvent.click(screen.getByText(/Submit/i));
    waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/phone is required/i)).toBeInTheDocument();
      expect(screen.getByText(/no of guests is required/i)).toBeInTheDocument();
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
      expect(screen.getByText(/your message is required/i)).toBeInTheDocument();
    });
  });

  it("displays error message when email is invalid", async () => {
    render(<ReservationForm />, {
      wrapper: TestWrapper,
    });

    userEvent.type(screen.getByLabelText(/Email/i), {
      target: { value: "invalid-email" },
    });

    await userEvent.click(screen.getByText(/Submit/i));

    waitFor(() =>
      expect(screen.getByText("invalid email address")).toBeInTheDocument()
    );
  });
});
