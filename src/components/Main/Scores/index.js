import db from "db";
import { useEffect, useState } from "react";

const Scores = () => {
  /**
   * TODOs: Render the scores in a table or a list.
   * Add a 'Start' button that links to the 'Test page'
   * HINT: See `<Link>` component RR
   */
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Using our connection to fs, access the 'scores' collection
    db.collection("scores")
      // `get()` is asynchronous and returns a Promise
      .get()
      .then((querySnapshot) => {
        setScores(() => querySnapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return <p>Scores Page</p>;
};

export default Scores;
