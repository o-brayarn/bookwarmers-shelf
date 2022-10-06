import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export default function BookCard({ book }) {
    return (
        <Row xs={1} md={4} className="d-flex justify-content-md-evenly" key={book.id}>
            <div className="" key="book" onClick={console.log("clicked")} >
                <div className="image">
                    <img alt="Snap! We lost an image!" src={book.cover} />
                </div>
                <div className="content">
                    <div className="header">
                        {book.title}
                    </div>
                    <div className="meta text-wrap">
                        <small>{book.author}</small>
                    </div>
                </div>

                <div className="extra content">
                    <span> {book.desc} </span>

                    <span>
                        <div className="ui center aligned segment basic">
                            <Button className="btn btn-outline-light" onClick={console.log("click")} > Add to Reading List </Button>
                            <span>
                                <Button className="btn btn-outline-warning" onClick={console.log("click")} >Add to Read</Button>
                            </span>
                        </div>
                    </span>
                </div>
            </div>

        </Row>
    );
}
