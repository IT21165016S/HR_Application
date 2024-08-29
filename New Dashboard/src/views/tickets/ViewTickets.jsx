import React, { useState, useEffect } from "react";
import Header from "components/Headers/Header";
import TicketItem from "./TicketItems";
import { useNavigate } from 'react-router-dom';
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
  Col,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { viewTickets, ticketActions } from "../tickets/redux/ticket/ticketSlice";
import TicketItems from "./TicketItems";

const dummyTickets = [
  {
    _id: "1",
    leaveType: "Personal",
    description: "Going on vacation",
    files: null,
    status: "in-progress",
    fileType: null,
  },
  {
    _id: "2",
    leaveType: "Educational",
    description: "Attending a workshop",
    files: "https://example.com/file.pdf",
    status: "Approved",
    fileType: "pdf",
  },
  {
    _id: "3",
    leaveType: "Medical",
    description: "Medical check-up",
    files: "https://example.com/image.jpg",
    status: "Rejected",
    fileType: "image",
  },
  {
    _id: "4",
    leaveType: "Personal",
    description: "Family event",
    files: "https://example.com/image.jpg",
    fileType: "image",
    status: "in-progress",
  },
  {
    _id: "5",
    leaveType: "Educational",
    description: "Conference",
    files: "https://example.com/image.jpg",
    fileType: "image",
    status: "Approved",
  },
];

const ViewTickets = () => {
  const [tickets, setTickets] = useState(dummyTickets);
  const dispatch = useDispatch();

  const { isLoading, isSuccess } = useSelector((state) => state.tickets);
  const { reset } = ticketActions;

  const handleDelete = async (ticketId) => {
    setTickets(tickets.filter((ticket) => ticket._id !== ticketId));
  };

  const handleStatusChange = async (ticketId, currentStatus) => {
    const newStatus =
      currentStatus === "in-progress"
        ? "Rejected"
        : currentStatus === "Rejected"
        ? "Approved"
        : "in-progress";

    setTickets(
      tickets.map((ticket) =>
        ticket._id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    } else {
      // Commented out to use dummy data
      // dispatch(viewTickets());
    }
  }, [isSuccess, dispatch, reset]);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Card className="shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0">Tickets</h3>
          </CardHeader>
          <CardHeader className="bg-secondary text-black">
            <Row>
              <Col className="col-2">Employee No</Col>
              <Col className="col-2">Leave Type</Col>
              <Col className="col-3">Description</Col>
              <Col className="col-2">Files</Col>
              <Col className="col-2">Status</Col>
              <Col className="col-1">Actions</Col>
            </Row>
          </CardHeader>
          <div className="p-3">
            {tickets.map((ticket) => (
              <Row key={ticket._id} className="align-items-center border-bottom py-2">
                <Col className="col-2">{ticket._id}</Col>
                <Col className="col-2">
                  <p className="mb-0">{ticket.leaveType}</p>
                </Col>
                <Col className="col-3">
                  <p className="mb-0">{ticket.description}</p>
                </Col>
                <Col className="col-2">
                  {ticket.files ? (
                    <ul className="list-unstyled mb-0">
                      <li>
                        {ticket.fileType === "pdf" ? (
                          <a href={ticket.files}>View PDF</a>
                        ) : (
                          <img src={ticket.files} alt="file preview" style={{ maxWidth: "100%" }} />
                        )}
                      </li>
                    </ul>
                  ) : (
                    <p className="mb-0">No files uploaded</p>
                  )}
                </Col>
                <Col className="col-2">
                  <div
                    className={`badge px-2 py-1 ${
                      ticket.status === "in-progress"
                        ? "badge-warning"
                        : ticket.status === "Approved"
                        ? "badge-success"
                        : ticket.status === "Rejected"
                        ? "badge-danger"
                        : "badge-secondary"
                    }`}
                    onClick={() => handleStatusChange(ticket._id, ticket.status)}
                    style={{ cursor: "pointer" }}
                  >
                    {ticket.status}
                  </div>
                </Col>
                <Col className="col-1">
                  <TicketItems ticket={ticket} />
                </Col>
              </Row>
            ))}
          </div>
        </Card>
      </Container>
    </>
  );
};

export default ViewTickets;
