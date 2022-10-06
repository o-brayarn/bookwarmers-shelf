import React from 'react'


export default function AddBooks({handleAdd }) {

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      cover: e.target.cover.value,
      desc: e.target.desc.value,
    }
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "content-Type":"application/json",
      },
      body: JSON.stringify(newBook)
    })
    .then((res) => res.json())
    .then(() => {
   return handleAdd(newBook)
  }
    )
    handleAdd(newBook)
    e.target.reset();
  }
  return (
    <React.Fragment>
      <div className="form-outline">
        <form className="form-control" onSubmit={handleSubmit} >
          <div className="input-fields">
            <input type="text" placeholder="Enter Book Title" name="title"/>
            <input type="text" placeholder='Author' name="author"/>
            <input type="url" placeholder="Cover url" name="cover" />
            <input type='text' placeholder='book description' name="desc "/>
            <input className="btn btn-primary" type="submit" value='Add Book'/>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}
