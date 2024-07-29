import Header from 'components/Headers/Header';
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { Container, Card, CardBody, CardHeader, Row, Col, Button,Form,FormGroup,Input } from 'reactstrap';

const TicketDetails = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]); // State to hold notes
  const [newNote, setNewNote] = useState(''); // State to handle new note input
  const [showNoteForm, setShowNoteForm] = useState(false);

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

      // setNotes([
      //   { id: '1', text: 'Initial note about the ticket' },
      //   // Add more dummy notes if needed
      // ]);
    };

    fetchTicket();
  }, [ticketId]);

  const handleAddNote = (event) => {
    event.preventDefault();
    if (newNote.trim() === '') return; // Do nothing if the note is empty

    // Add the new note to the notes state
    setNotes([...notes, { id: Date.now().toString(), text: newNote }]);
    setNewNote(''); // Clear the input field
    setShowNoteForm(false); 
  };
  const toggleNoteForm = () => {
    setShowNoteForm(!showNoteForm); // Toggle the visibility of the form
  };

  if (!ticket) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Header/>
    
    <Container className="mt--7">
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
        
         <h4>Notes:</h4>
            <ul className="list-unstyled">
              {notes.map((note) => (
                <li key={note.id} className="mb-2">
                  {note.text}
                </li>
              ))}
            </ul>
        {/* Add Note Form */}
        {showNoteForm && (
            <Form onSubmit={handleAddNote}>
              <FormGroup>
                <Input
                  type="textarea"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Type your note here..."
                />
              </FormGroup>
              <Button color="primary" type="submit">
                Submit Note
              </Button>
            </Form>
          )}
          {/* Toggle Add Note Form */}
          <Button color="primary" onClick={toggleNoteForm} className="mb-3">
            {showNoteForm ? 'Cancel' : 'Add Note'}
          </Button>
        </CardBody>
      </Card>
    </Container>
    </>
  );
};

export default TicketDetails;
