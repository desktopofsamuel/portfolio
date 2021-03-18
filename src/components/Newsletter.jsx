import React, { useState } from "react";
import styled from "styled-components";

const FormTitle = styled.h3`
  color: var(--color-white-light-100);
  margin: 0;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(100px, 1fr) 25% 25%;
    grid-gap: 8px;
  }
`;

const FormEmailInput = styled.input`
  border: 0;
  min-height: 48px;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  font-family: var(--font-secondary);
`;

const FormSubmissionButton = styled.input`
  border: 0;
  min-height: 48px;
  cursor: pointer;
  border-radius: 24px;
  background-color: var(--color-secondary-light-500);
  font-family: var(--font-primary);
  color: var(--color-white-light-100);
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: var(--transition);
  display: grid;
  place-content: center;

  &:hover {
    background-color: var(--color-primary-light-700);
  }
`;

const Newsletter = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  //FORM_URL should be the same as the form action url pointed out above
  const FORM_URL = `https://app.convertkit.com/forms/1917969/subscriptions`;

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });
      setEmail("");
      setName("");
      const json = await response.json();
      if (json.status === "success") {
        setStatus("SUCCESS");
        return;
      }
    } catch (err) {
      setStatus("ERROR");
      console.log(err);
    }
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameInputChange = event => {
    const { value2 } = event.target;
    setName(value2);
  };

  return (
    <>
      <FormTitle>📫 Join My Newsletter</FormTitle>
      <p>
        Subscribe to receive more quality design tips, and insights straight to
        your inbox.
      </p>

      {status === "SUCCESS" && <p>Please go confirm your subscription!</p>}
      {status === "ERROR" && <p>Oops, Something went wrong! try again.</p>}

      <FormWrapper
        className="sub__form"
        action={FORM_URL}
        method="post"
        onSubmit={handleSubmit}
      >
        <FormEmailInput
          type="email"
          aria-label="Your email"
          //The name attribute should be the same as on you selected form.
          name="email_address"
          placeholder="Your email address"
          onChange={handleInputChange}
          value={email}
          required
        />
        <FormEmailInput
          type="name"
          aria-label="First Name"
          //The name attribute should be the same as on you selected form.
          name="fields[first_name]"
          placeholder="First Name"
          onChange={handleNameInputChange}
          value={name}
          required
        />

        <FormSubmissionButton type="submit" value="Subscribe" />
      </FormWrapper>

      <small>I won't send you spam and you can unsubscribe at any time</small>
    </>
  );
};

export default Newsletter;

// import React from "react";
// import { Helmet } from "react-helmet";

// import "./newsletter.css";

// const Newsletter = () => {
//   return (
//     <>
//       <Helmet>
//         <script async src="https://f.convertkit.com/ckjs/ck.5.js"></script>
//       </Helmet>
//       <form
//         action="https://app.convertkit.com/forms/1918267/subscriptions"
//         className="seva-form formkit-form"
//         method="post"
//         data-sv-form="1918267"
//         data-uid="ce3ddd5c3d"
//         data-version="5"
//         data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
//         min-width="400 500 600 700 800"
//       >
//         <div data-style="clean">
//           <ul
//             className="formkit-alert formkit-alert-error"
//             data-element="errors"
//             data-group="alert"
//           ></ul>
//           <h4 style={{ marginBottom: ".5rem" }}>Want to learn more?</h4>
//           <div
//             data-element="fields"
//             data-stacked="false"
//             className="seva-fields formkit-fields"
//           >
//             <label className="formkit-field">
//               <span>First name</span>
//               <input
//                 className="formkit-input"
//                 name="first_name"
//                 aria-label="Your first name"
//                 placeholder="Your first name"
//                 type="text"
//                 style={{
//                   color: "rgb(0, 0, 0)",
//                   borderColor: "rgb(227, 227, 227)",
//                   borderRadius: "4px",
//                   fontWeight: 400,
//                 }}
//               />
//             </label>
//             <label className="formkit-field">
//               <span>Email address</span>
//               <input
//                 className="formkit-input"
//                 name="email_address"
//                 placeholder="Your email address"
//                 required=""
//                 type="email"
//                 style={{
//                   color: "rgb(0, 0, 0)",
//                   borderColor: "rgb(227, 227, 227)",
//                   borderRadius: "4px",
//                   fontWeight: 400,
//                 }}
//               />
//             </label>
//             <button
//               data-element="submit"
//               className="formkit-submit"
//               style={{
//                 color: " #fff",
//                 backgroundColor: "#09c",
//                 borderRadius: "4px",
//                 fontWeight: 500,
//               }}
//             >
//               <div className="formkit-spinner">
//                 <div></div>
//                 <div></div>
//                 <div></div>
//               </div>
//               <span>Subscribe</span>
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Newsletter;
