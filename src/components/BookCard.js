import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function BookCard({ book, addToRead }) {
    return (
        <Card className="d-md-flex" >
            <div className="" key="book" >
                <div className="image">
                    <img alt="Snap! We lost an image!" src={book.cover} />
                </div>
                <div className="content">
                    <div className="header">
                     <h3>  {book.title} </h3> 
                    </div>
                    <div className="meta text-wrap">
                        <h6>{book.author}</h6>
                    </div>
                </div>

                <div className="extra content">
                    <span> {book.desc} </span>

                    <span>
                        <div className="ui center aligned segment basic">
                            <Button className="btn btn-outline-light" key={book.id} onClick={() => addToRead(book)} > Add to Reading List </Button>
                            <span>
                                <Button className="btn btn-outline-warning" onClick={console.log("click")} >Add to Read</Button>
                            </span>
                        </div>
                    </span>
                </div>
            </div>

        </Card>
    );
}
