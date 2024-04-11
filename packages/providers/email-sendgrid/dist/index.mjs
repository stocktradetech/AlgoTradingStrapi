import sendgrid from "@sendgrid/mail";
const index = {
  init(providerOptions, settings) {
    sendgrid.setApiKey(providerOptions.apiKey);
    return {
      send(options) {
        return new Promise((resolve, reject) => {
          const { from, to, cc, bcc, replyTo, subject, text, html, ...rest } = options;
          const msg = {
            from: from || settings.defaultFrom,
            to,
            cc,
            bcc,
            replyTo: replyTo || settings.defaultReplyTo,
            subject,
            text,
            html,
            ...rest
          };
          sendgrid.send(msg, false, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
    };
  }
};
export {
  index as default
};
//# sourceMappingURL=index.mjs.map
