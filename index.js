exports.gcfMetadataAlert = (data, context) => {
  const sendGridMail = require('@sendgrid/mail');
  sendGridMail.setApiKey (""); /* Enter Private key generated on SendGrid.com */
  const msg = {
    to: ['toemailaddress-1@gmail.com', 'toemailaddress-2@gmail.com'], /* Enter multiple email ids comma separated with in square bracket */
    from:'fromemailaddressm@gmail.com', /* Enter your email address registered on SendGrid.com */
    subject: 'Alert !! File Metadata Change Notification.',
    html: 'Hello <strong>Tasleem</strong>, <br/>The metadata for file <strong>'+data.name +'</strong> in <strong>'+data.bucket+'</strong> is Changed.<br/>Thanks<br/> Lets Learn GCP !!!'      
  };
  sendGridMail.send(msg)
};
