export default function HomeBlackBox() {
  return (
    <section className="section_home-blackbox">
      <div className="padding-global">
        <div className="container-xlarge">
          <div className="home-blackbox_wrapper">
            <div className="container-small">
              <div fade-in="" className="home-blackbox_content">
                <div className="home-blackbox_content-block">
                  <h2 className="home-blackbox_text heading-style-h3">
                    Trustless, verifiable, and performant.
                  </h2>
                </div>
                <div className="home-blackbox_content-block">
                  <p className="home-blackbox_text text-size-medium">
                    Arcium is a global supercomputer for a new internet,
                    providing developers, applications and entire industries
                    with a trustless, verifiable, and efficient framework to run
                    encrypted computations.
                  </p>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              parallax-image=""
              className="home-blackbox_background-video w-embed"
            >
              <style>
                {` .home-blackbox_background-video video {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                            object-position: 50% 50%;
                                        }`}
              </style>
              <video
                loop
                muted
                autoPlay
                playsInline
                src="https://scorecard-temp.netlify.app/video/black-box-main-2.mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
