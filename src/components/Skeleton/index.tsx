export const Skeleton = () => {
  return (
    <div className="pds-page">
      {/* TOP ACTIONS */}
      <div className="pds-topbar">
        <div className="pds-skeleton pds-back-button" />

        <div className="pds-actions">
          <div className="pds-skeleton pds-action-btn pds-action-small" />
          <div className="pds-skeleton pds-action-btn" />
        </div>
      </div>

      {/* CARD 1 */}
      <section className="pds-card">
        <div className="pds-card-title">
          <div className="pds-skeleton pds-title-icon" />
          <div className="pds-skeleton pds-title-text" />
        </div>

        <div className="pds-alert">
          <div className="pds-skeleton pds-alert-icon" />

          <div className="pds-alert-content">
            <div className="pds-skeleton pds-alert-title" />
            <div className="pds-skeleton pds-alert-text" />
          </div>
        </div>

        <div className="pds-grid pds-grid-2">
          <div className="pds-field">
            <div className="pds-skeleton pds-label" />
            <div className="pds-skeleton pds-input" />
          </div>

          <div className="pds-field">
            <div className="pds-skeleton pds-label" />
            <div className="pds-skeleton pds-input" />
          </div>
        </div>
      </section>

      {/* CARD 2 */}
      <section className="pds-card">
        <div className="pds-card-title">
          <div className="pds-skeleton pds-title-icon" />
          <div className="pds-skeleton pds-title-text medium" />
        </div>

        <div className="pds-grid pds-grid-main">
          <div className="pds-field">
            <div className="pds-skeleton pds-label" />
            <div className="pds-skeleton pds-input" />
          </div>

          <div className="pds-field pds-small-field">
            <div className="pds-skeleton pds-label" />
            <div className="pds-skeleton pds-input" />
          </div>
        </div>

        <div className="pds-field">
          <div className="pds-skeleton pds-label" />
          <div className="pds-skeleton pds-input" />
        </div>

        <div className="pds-grid pds-grid-main">
          <div className="pds-field">
            <div className="pds-skeleton pds-label" />
            <div className="pds-skeleton pds-input" />
          </div>

          <div className="pds-field pds-small-field">
            <div className="pds-skeleton pds-label" />
            <div className="pds-skeleton pds-input" />
          </div>
        </div>
      </section>
    </div>
  );
};