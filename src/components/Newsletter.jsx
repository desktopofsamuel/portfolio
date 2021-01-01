// //In src/components/sub-form.component.js
// import React, { useState } from "react";

// const SubscriptionForm = () => {
//   const [status, setStatus] = useState(null);
//   const [email, setEmail] = useState("");

//   //FORM_URL should be the same as the form action url pointed out above
//   const FORM_URL = `https://app.convertkit.com/forms/1917969/subscriptions`;

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     try {
//       const response = await fetch(FORM_URL, {
//         method: "post",
//         body: data,
//         headers: {
//           accept: "application/json",
//         },
//       });
//       setEmail("");
//       const json = await response.json();
//       if (json.status === "success") {
//         setStatus("SUCCESS");
//         return;
//       }
//     } catch (err) {
//       setStatus("ERROR");
//       console.log(err);
//     }
//   };

//   const handleInputChange = event => {
//     const { value } = event.target;
//     setEmail(value);
//   };

//   return (
//     <div className="sub">
//       <h2>Join My Newsletter</h2>
//       <p>
//         If you've found any of my articles useful, subscribe to receive more
//         quality articles straight to your inbox.
//       </p>

//       {status === "SUCCESS" && <p>Please go confirm your subscription!</p>}
//       {status === "ERROR" && <p>Oops, Something went wrong! try again.</p>}

//       <form
//         className="sub__form"
//         action={FORM_URL}
//         method="post"
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="email"
//           aria-label="Your email"
//           //The name attribute should be the same as on you selected form.
//           name="email_address"
//           placeholder="Your email address"
//           onChange={handleInputChange}
//           value={email}
//           required
//         />

//         <input type="submit" value="Subscribe"></input>
//       </form>

//       <p className="sub__tag">
//         I won't send you spam and you can unsubscribe at any time
//       </p>
//     </div>
//   );
// };

// export default SubscriptionForm;

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
