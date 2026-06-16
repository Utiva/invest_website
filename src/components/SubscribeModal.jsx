import { useEffect } from "react";

export default function SubscribeModal({ onClose }) {
  useEffect(() => {
    const formId = "sf3zb89985880d408ae8edfbf272aa4d3b39e7c167dd7a5696241353012f44772ae3";

    if (document.getElementById("zoho-optin-script")) return;

    const script = document.createElement("script");
    script.id = "zoho-optin-script";
    script.type = "text/javascript";
    script.src = "https://utiva-zgpm.maillist-manage.com/js/optin.min.js";
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF(formId, "ZCFORMVIEW", false, "acc", false, "2");
      }
    };
    document.head.appendChild(script);

    return () => {};
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-primary">Subscribe to Investor Updates</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div
            id="sf3zb89985880d408ae8edfbf272aa4d3b39e7c167dd7a5696241353012f44772ae3"
            data-type="signupform"
          >
            <div id="customForm">
              <input type="hidden" id="recapTheme" value="2" />
              <input type="hidden" id="isRecapIntegDone" value="false" />
              <input type="hidden" id="signupFormMode" value="copyCode" />
              <input type="hidden" id="signupFormType" value="LargeForm_Vertical" />
              <input type="hidden" id="recapModeTheme" value="" />
              <div
                name="SIGNUP_PAGE"
                className="large_form_4_css"
                id="SIGNUP_PAGE"
                style={{
                  padding: "40px 30px 30px",
                  backgroundColor: "#fce5cd",
                  fontFamily: "Verdana",
                  color: "#000",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                <div style={{ margin: "0px auto" }}>
                  <div
                    id="imgBlock"
                    name="LOGO_DIV"
                    style={{
                      width: "100%",
                      margin: "0px auto",
                      paddingBottom: "10px",
                      textAlign: "center",
                      paddingTop: "10px",
                    }}
                  >
                    <img
                      valign="middle"
                      src="https://stratus.campaign-image.com/images/131e70f71_utiva_logo_4_1.png"
                      name="LOGO"
                      id="iframeImg"
                      style={{ width: "100px", maxWidth: "100%", height: "auto" }}
                      alt="Utiva"
                    />
                  </div>
                </div>
                <br />
                <div
                  id="signupMainDiv"
                  style={{ margin: "0px auto", width: "100%", minWidth: "230px", maxWidth: "600px" }}
                  name="SIGNUPFORM"
                >
                  <div>
                    <div style={{ position: "relative" }}>
                      <div
                        id="Zc_SignupSuccess"
                        style={{
                          display: "none",
                          position: "absolute",
                          marginLeft: "4%",
                          width: "90%",
                          backgroundColor: "white",
                          padding: "3px",
                          border: "3px solid rgb(194,225,154)",
                          marginTop: "10px",
                          marginBottom: "10px",
                          wordBreak: "break-all",
                        }}
                      >
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                          <tbody>
                            <tr>
                              <td width="10%">
                                <img
                                  className="successicon"
                                  src="https://utiva-zgpm.maillist-manage.com/images/challangeiconenable.jpg"
                                  align="absmiddle"
                                  alt=""
                                />
                              </td>
                              <td>
                                <span
                                  id="signupSuccessMsg"
                                  style={{
                                    color: "rgb(73,140,132)",
                                    fontFamily: "sans-serif",
                                    fontSize: "14px",
                                    wordBreak: "break-word",
                                  }}
                                >
                                  &nbsp;&nbsp;Thank you for Signing Up
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <form
                      method="POST"
                      id="zcampaignOptinForm"
                      style={{ margin: "0px" }}
                      action="https://Utiva-zgpm.maillist-manage.com/weboptin.zc"
                      target="_zcSignup"
                    >
                      <div id="SIGNUP_BODY_ALL" name="SIGNUP_BODY_ALL">
                        <h1
                          style={{
                            color: "#fff",
                            fontSize: "17px",
                            fontFamily: "Verdana",
                            margin: "0px",
                            textAlign: "left",
                            padding: "20px",
                            backgroundColor: "#FBAF1B",
                            wordBreak: "break-word",
                            borderWidth: "1px",
                            borderStyle: "none",
                          }}
                          id="SIGNUP_HEADING"
                        >
                          Be The First To Know: Join the Utiva Investment Update
                        </h1>
                        <div
                          style={{
                            padding: "20px",
                            textAlign: "center",
                            backgroundColor: "#050794",
                            fontFamily: "Verdana",
                            color: "#fff",
                            fontSize: "11px",
                          }}
                          id="SIGNUP_BODY"
                        >
                          <div style={{ margin: "0px auto", textAlign: "left" }}>
                            <div style={{ lineHeight: "1.6" }}>
                              Thanks for choosing to stay in touch with us
                            </div>
                            <div
                              style={{
                                display: "none",
                                backgroundColor: "#FFEBE8",
                                padding: "10px",
                                color: "#d20000",
                                fontSize: "11px",
                                margin: "10px 0px",
                                border: "solid 1px #ffd9d3",
                                marginTop: "20px",
                              }}
                              id="errorMsgDiv"
                            >
                              &nbsp;&nbsp;Please correct the marked field(s) below.
                            </div>
                            <div>
                              <div style={{ fontSize: "12px", marginTop: "10px" }} className="zcsffieldsdiv">
                                {[
                                  { label: "Contact Email", name: "CONTACT_EMAIL", type: "email", required: true, dt: "1,true,6,Contact Email,2" },
                                  { label: "First Name", name: "FIRSTNAME", type: "text", required: false, dt: "1,false,1,First Name,2" },
                                  { label: "Last Name", name: "LASTNAME", type: "text", required: false, dt: "1,false,1,Last Name,2" },
                                  { label: "Company Name", name: "COMPANYNAME", type: "text", required: false, dt: "1,false,1,Company Name,2" },
                                ].map((field) => (
                                  <div key={field.name} style={{ padding: "10px 0px" }}>
                                    <div>
                                      <div
                                        style={{
                                          width: "130px",
                                          float: "left",
                                          marginTop: "5px",
                                          marginRight: "5px",
                                          textAlign: "right",
                                          fontFamily: "Verdana",
                                          color: "#fff",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {field.label}&nbsp;
                                        {field.required && (
                                          <span style={{ color: "#B40000", fontSize: "11px" }}>*</span>
                                        )}
                                      </div>
                                      <div style={{ width: "60%", float: "left", minWidth: "170px", maxWidth: "70%" }}>
                                        <input
                                          name={field.name}
                                          changeitem="SIGNUP_FORM_FIELD"
                                          style={{
                                            height: "28px",
                                            padding: "2px",
                                            width: "97%",
                                            color: "#333",
                                            background: "#fff",
                                            borderWidth: "0 0 1px",
                                            borderStyle: "solid",
                                            borderColor: "rgba(255,255,255,0.5)",
                                            fontFamily: "Verdana",
                                            fontSize: "12px",
                                            boxSizing: "border-box",
                                            outline: "0",
                                            borderRadius: "0",
                                          }}
                                          maxLength={field.name === "LASTNAME" ? 50 : 100}
                                          type={field.type}
                                        />
                                        <span style={{ display: "none" }} id={`dt_${field.name}`}>
                                          {field.dt}
                                        </span>
                                      </div>
                                    </div>
                                    <div style={{ clear: "both" }} />
                                  </div>
                                ))}
                              </div>

                              <input type="hidden" id="secretid" value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs" />
                              <div style={{ borderBottom: "#ebebeb dotted 1px", marginTop: "10px", clear: "both" }} />
                              <div style={{ color: "#B40000", fontSize: "11px", fontFamily: "Arial", padding: "10px 10px 10px 0px" }}>
                                *Required Fields
                              </div>
                              <div style={{ padding: "10px", textAlign: "center" }}>
                                <input
                                  type="button"
                                  action="Save"
                                  id="zcWebOptin"
                                  name="SIGNUP_SUBMIT_BUTTON"
                                  style={{
                                    cursor: "pointer",
                                    borderRadius: "3px",
                                    outline: "none",
                                    padding: "8px 20px",
                                    textAlign: "center",
                                    color: "#fff",
                                    fontSize: "14px",
                                    backgroundColor: "#FBAF1B",
                                    border: "5px solid #170066",
                                    fontFamily: "Verdana",
                                    whiteSpace: "normal",
                                  }}
                                  value="Join Now"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <input type="hidden" id="fieldBorder" value="" />
                        <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                        <input type="hidden" name="viewFrom" id="viewFrom" value="URL_ACTION" />
                        <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                        <input type="hidden" id="lD" name="lD" value="1107e5e44920a9dd1" />
                        <input type="hidden" name="emailReportId" id="emailReportId" value="" />
                        <input type="hidden" name="zx" id="cmpZuid" value="131e70f71" />
                        <input type="hidden" name="zcvers" value="3.0" />
                        <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                        <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                        <input type="hidden" id="zcld" name="zcld" value="1107e5e44920a9dd1" />
                        <input type="hidden" id="zctd" name="zctd" value="1107e5e4481c063c1" />
                        <input type="hidden" id="document_domain" value="" />
                        <input type="hidden" id="zc_Url" value="Utiva-zgpm.maillist-manage.com" />
                        <input type="hidden" id="new_optin_response_in" value="0" />
                        <input type="hidden" id="duplicate_optin_response_in" value="0" />
                        <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zb89985880d408ae8edfbf272aa4d3b39e7c167dd7a5696241353012f44772ae3" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <input type="hidden" id="isCaptchaNeeded" value="false" />
              <input type="hidden" id="superAdminCap" value="0" />
              <img
                src="https://Utiva-zgpm.maillist-manage.com/images/spacer.gif"
                id="refImage"
                onLoad={(e) => {
                  if (window.referenceSetter) window.referenceSetter(e.target);
                }}
                style={{ display: "none" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
