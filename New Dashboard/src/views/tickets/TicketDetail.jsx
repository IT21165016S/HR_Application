import Header from 'components/Headers/Header';
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { Container, Card, CardBody, CardHeader, Row, Col, Button } from 'reactstrap';

const TicketDetails = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTicket = async () => {
      // Since we're using dummy data, you can fetch the data from your dummy data array or API
      const dummyTickets = [
        {
          _id: '1',
          description: 'Leave for medical reasons',
          leaveType: 'Medical',
          status: 'in-progress',
          files: 'https://example.com/file.pdf',
          fileType: 'pdf',
          createdAt: new Date(),
        },
        {
          _id: '2',
          description: 'Leave for vacation',
          leaveType: 'Vacation',
          status: 'Approved',
          files: 'https://example.com/image.jpg',
          fileType: 'image',
          createdAt: new Date(),
        },
        // Add more dummy tickets as needed
      ];

      

      const ticket = dummyTickets.find((t) => t._id === ticketId);
      setTicket(ticket);
    };

    fetchTicket();
  }, [ticketId]);

  if (!ticket) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Header/>
    <Container className="mt-4">
      <Button onClick={() => window.history.back()} className="mb-3">
        Back to Tickets
      </Button>
      <Card className="shadow">
        <CardHeader className="bg-primary text-white">
          <h3 className="mb-0">Ticket Details</h3>
        </CardHeader>
        <CardBody>
          <Row className="mb-3">
            <Col>
              <strong>Ticket ID:</strong> {ticket._id}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <strong>Description:</strong> {ticket.description}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <strong>Leave Type:</strong> {ticket.leaveType}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <strong>Status:</strong> {ticket.status}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <strong>Created At:</strong> {new Date(ticket.createdAt).toLocaleString('en-US')}
            </Col>
          </Row>
          {ticket.files && (
            <Row className="mb-3">
              <Col>
                <strong>Files:</strong>
                {ticket.fileType === 'pdf' ? (
                  <a href={ticket.files} target="_blank" rel="noopener noreferrer">
                    View PDF
                  </a>
                ) : (
                  <img src={ticket.files} alt="file preview" style={{ maxWidth: '100%' }} />
                )}
              </Col>
            </Row>
          )}
        </CardBody>
      </Card>
    </Container>
    </>
  );
};

export default TicketDetails;
