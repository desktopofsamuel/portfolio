import React from "react";
import { Formik, Field, Form } from "formik";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  "appW4gVPhW2puIptz",
);

const Feedback = () => (
  <Formik
    initialValues={{
      email: "",
      twitter: "",
      feedback: "",
    }}
    onSubmit={async values => {
      base("Feedback").create(
        [
          {
            fields: {
              Feedback: values.feedback,
              Twitter: values.twitter,
              Email: values.email,
            },
          },
        ],
        function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(record => {
            console.log(record.getId());
          });
        },
      );

      // fetch(
      //   'https://emailoctopus.com/api/1.5/lists/50c6d144-ae86-11eb-a3d0-06b4694bee2a/contacts',
      //   {
      //     method: 'post',
      //     body: JSON.stringify(data),
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     mode: 'no-cors',
      //   },
      // ).then((response) => response.json());
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <label htmlFor="email">Email Address</label>
        <Field id="email" name="email" type="email" />
        <label htmlFor="twitter">Twitter Handle</label>
        <Field id="twitter" name="twitter" type="twitter" />
        <label htmlFor="feedback">Feedback</label>
        <Field id="feedback" name="feedback" type="feedback" />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);
export default Feedback;
