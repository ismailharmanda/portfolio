import React,{useState} from "react";

const Comment=(props)=>{
    const [text,setText]=useState("")
    return(
<div>
<section className="row bg-dark text-light">
<div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form id="algin-form">
                    <div className="form-group">
                        <h4>Leave a comment</h4> <label for="message">Message</label> <textarea name="msg" id="" msg cols="30" rows="5" className="form-control" style={{backgroundColor: "black"}}></textarea>
                    </div>
                    <div className="form-group"> <label for="name">Name</label> <input type="text" name="name" id="fullname" className="form-control" /> </div>
                    <div className="form-group"> <label for="email">Email</label> <input type="text" name="email" id="email" className="form-control" /> </div>
                    <div className="form-group">
                        <p className="text-secondary">If you have a <a href="#" className="alert-link">gravatar account</a> your address will be used to display your profile picture.</p>
                    </div>
                    <div className="form-inline"> <input type="checkbox" name="check" id="checkbx" className="mr-1" /> <label for="subscribe">Subscribe me to the newlettter</label> </div>
                    <div className="form-group"> <button type="button" id="post" className="btn">Post Comment</button> </div>
                </form>
            </div>
</section>
</div>
)
}

export default Comment;