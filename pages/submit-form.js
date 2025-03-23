export default function SubmitForm() {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Submit Maintenance Request</h2>
        <form action="/api/submit-issue" method="POST">
          <label>Name: </label><br />
          <input type="text" name="name" required /><br />
          <label>Unit: </label><br />
          <input type="text" name="unit" required /><br />
          <label>Description:</label><br />
          <textarea name="description" rows="4" cols="40"></textarea><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  