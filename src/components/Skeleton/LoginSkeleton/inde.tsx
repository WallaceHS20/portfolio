export const LoginSkeleton = () => {
  return (
    <div className="ls-page">
      {/* LEFT SIDE */}
      <section className="ls-left">
        <div className="ls-logo-wrapper">
          <div className="ls-skeleton ls-logo" />
        </div>

        <div className="ls-footer-text">
          <div className="ls-skeleton ls-footer-line" />
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="ls-right">
        <div className="ls-form-container">
          <div className="ls-skeleton ls-title" />

          <div className="ls-skeleton ls-subtitle" />
          <div className="ls-skeleton ls-subtitle small" />

          <div className="ls-form">
            <div className="ls-field">
              <div className="ls-skeleton ls-label" />
              <div className="ls-skeleton ls-input" />
            </div>

            <div className="ls-field">
              <div className="ls-skeleton ls-label" />
              <div className="ls-skeleton ls-input" />
            </div>

            <div className="ls-skeleton ls-button" />
          </div>

          <div className="ls-divider" />

          <div className="ls-skeleton ls-copyright" />
        </div>
      </section>
    </div>
  )
}
