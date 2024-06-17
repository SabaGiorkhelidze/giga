import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { setSearchQuery, applySearch } from '../features/Hotel/HotelSlice';
import { setLanguage } from '../features/languageSlice/LanguageSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.hotel.searchQuery);
    const currentLanguage = useSelector((state) => state.language.language);

    const handleSearchChange = (event) => {
        dispatch(setSearchQuery(event.target.value));
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        dispatch(applySearch());
    };

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
    };

    const renderSearchForm = location.pathname === '/rooms';

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/signin">Sign in</Nav.Link>
                        <Nav.Link href="/rooms">Rooms Catalogue</Nav.Link>
                        <Nav.Link href="/booking">Booked Room</Nav.Link>
                    </Nav>
                    {renderSearchForm && (
                        <Form className="d-flex" onSubmit={handleSearchSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </Form>
                    )}
                    <NavDropdown title="Language" id="language-switcher-dropdown">
                        <NavDropdown.Item
                            active={currentLanguage === 'en'}
                            onClick={() => handleLanguageChange('en')}
                        >
                            English
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            active={currentLanguage === 'ge'}
                            onClick={() => handleLanguageChange('ge')}
                        >
                            Georgian
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
