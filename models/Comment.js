// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var CommentSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});

// Create the Note model with the NoteSchema
var Comment = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = Comment;