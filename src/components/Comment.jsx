import React, { useState } from "react";

const Comment = (props) => {
  const [text, setText] = useState({ message: "", name: "", email: "" });
  const [comments, setComments] = useState([]);
  const onButtonClick = (e) => {
    e.preventDefault();
    setComments([...comments, text]);
    setText({ message: "", name: "", email: "" });
  };
  const deleteComment = (e) => {
    return setComments(
      comments.filter((comment, index) => {
        console.log(index);
        console.log(e.target.id);
        return index !== Number(e.target.id);
      })
    );
  };
  const allComments =
    comments.length > 0 &&
    comments.map((comment, index) => {
      return (
        <div key={index}>
          <div className="row align-items-center">
            <div className="col-10 bg-light text-dark comment mt-4 text-justify float-left">
              <h4>
                Name: {comment.name} Email: {comment.email}
              </h4>
              <br />
              <p>{comment.message}</p>
            </div>
            <div className="col-1">
              <i
                style={{ cursor: "pointer" }}
                id={index}
                onClick={(e) => deleteComment(e)}
                title="Delete"
                className="fa fa-trash-alt inline"
              ></i>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div id="comments" className="row bg-dark text-light">
      <div className="col-md-6">{allComments}</div>
      <div className="col-md-6">
        <section className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            id="algin-form"
          >
            <div className="form-group">
              <h4>Leave a comment</h4> <label for="message">Message</label>{" "}
              <textarea
                onChange={(e) =>
                  setText({
                    message: e.target.value,
                    name: text.name,
                    email: text.email,
                  })
                }
                value={text.message}
                name="message"
                id=""
                cols="30"
                rows="5"
                className="form-control bg-white"
              ></textarea>
            </div>
            <div className="form-group">
              {" "}
              <label htmlFor="name">Name</label>{" "}
              <input
                onChange={(e) =>
                  setText({
                    name: e.target.value,
                    message: text.message,
                    email: text.email,
                  })
                }
                value={text.name}
                type="text"
                name="name"
                id="fullname"
                className="form-control"
              />{" "}
            </div>
            <div className="form-group">
              {" "}
              <label htmlFor="email">Email</label>{" "}
              <input
                onChange={(e) =>
                  setText({
                    email: e.target.value,
                    message: text.message,
                    name: text.name,
                  })
                }
                value={text.email}
                type="text"
                name="email"
                id="email"
                className="form-control"
              />{" "}
            </div>
            <div className="form-inline mt-2">
              {" "}
              <button
                onClick={(e) => {
                  onButtonClick(e);
                }}
                type="button"
                className="btn btn-light fw-bold"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Comment;
