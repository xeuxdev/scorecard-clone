import React from "react";

export function ControlSection() {
  return (
    <section className="section_take-control">
      <div className="padding-global">
        <div className="container-large">
          <div className="take-control_wrapper">
            <div className="background-video">
              <div
                aria-hidden="true"
                className="background-video-embed w-embed overflow-hidden"
              >
                <style>
                  {` .background-video-embed video {
                                                width: 100%;
                                                height: 100%;
                                                object-fit: fit;
                                                object-position: 50% 50%;
                                            }`}
                </style>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  src="https://xlwx5ka7x96yuoy8.public.blob.vercel-storage.com/Pills%20spin-lojnixFCHKwz2dTXay4XcyjPelml6M.mp4"
                  className="overflow-hidden"
                />
              </div>
            </div>
            <div className="take-control_content-wrapper">
              <div
                fade-in=""
                id="w-node-_6b9235dc-8ddc-5528-a09f-0b5ce2da4318-e2da4312"
                className="take-control_content"
              >
                <h2 className="take-control_text">
                  Take Control of AI Performance
                </h2>
                <div className="take-control_copy">
                  <p className="take-control_text subtitle-size-2">
                    Join forward-thinking teams using Scorecard to upgrade the
                    way they build, test, and improve AI AGENTS.
                  </p>
                  <a
                    className="button-primary w-inline-block"
                    data-wf-component-context="%5B%7B%22componentId%22%3A%226b9235dc-8ddc-5528-a09f-0b5ce2da4312%22%2C%22instanceId%22%3A%226b9235dc-8ddc-5528-a09f-0b5ce2da4321%22%7D%2C%7B%22componentId%22%3A%22b4d05707-5080-4fcb-8c01-6a13b4c7bf00%22%2C%22instanceId%22%3A%226b9235dc-8ddc-5528-a09f-0b5ce2da431e%22%7D%5D"
                    data-wf-element-id="b4d05707-5080-4fcb-8c01-6a13b4c7bf00"
                    data-wf-event-ids="157055388"
                    href="/book-a-demo"
                    aria-label="Go to Book a Demo page"
                    role="button"
                    data-wf-native-id-path="6b9235dc-8ddc-5528-a09f-0b5ce2da4321:6b9235dc-8ddc-5528-a09f-0b5ce2da431e:b4d05707-5080-4fcb-8c01-6a13b4c7bf00"
                    data-wf-ao-click-engagement-tracking="true"
                  >
                    <span className="button-primary_bg"></span>
                    <span
                      data-text="Go to Book a Demo page"
                      className="button-primary_inner"
                    >
                      <span className="button-primary_text">Learn More</span>
                      <span className="button-primary_icon-wrap">
                        <span
                          style={
                            {
                              ["--index-parent" as any]: "1",
                            } as React.CSSProperties
                          }
                          className="button-primary_icon"
                        >
                          <span
                            style={
                              { ["--index" as any]: "2" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "1" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "0" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "1" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "2" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                        </span>
                        <span
                          style={
                            {
                              ["--index-parent" as any]: "0",
                            } as React.CSSProperties
                          }
                          className="button-primary_icon"
                        >
                          <span
                            style={
                              { ["--index" as any]: "2" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "1" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <div
                            style={
                              { ["--index" as any]: "0" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></div>
                          <span
                            style={
                              { ["--index" as any]: "1" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                          <span
                            style={
                              { ["--index" as any]: "2" } as React.CSSProperties
                            }
                            className="button-primary_dot"
                          ></span>
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
