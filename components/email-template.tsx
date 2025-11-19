import * as React from "react";

interface EmailTemplateProps {
  name: string;
  comment: string;
  postTitle: string;
  logoUrl: string;
}

export function EmailTemplate({
  name,
  comment,
  postTitle,
  logoUrl,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "#ffffff",
        color: "#000000",
        maxWidth: 768,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        lineHeight: 1.5,
      }}
    >
      {/* Logo Section */}
      <div style={{ textAlign: "center", padding: "24px 0" }}>
        <img
          src={logoUrl}
          alt="Logo"
          width="80"
          height="80"
          style={{ objectFit: "contain", opacity: 0.9 }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          padding: "24px 32px",
          background: "#000000",
          color: "#ffffff",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "0.3px",
          }}
        >
          New Comment Received 📨
        </h1>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px 32px",
          border: "1px solid #e6e6e6",
          borderTop: 0,
        }}
      >
        <p style={{ margin: "0 0 12px 0", fontSize: "14px", color: "#111" }}>
          <strong>Post:</strong>{" "}
          <span style={{ marginLeft: 6, fontWeight: 500 }}>{postTitle}</span>
        </p>

        <p style={{ margin: "0 0 12px 0", fontSize: "14px", color: "#111" }}>
          <strong>User:</strong> <span style={{ marginLeft: 6 }}>{name}</span>
        </p>

        <div
          style={{
            margin: "16px 0",
            padding: "16px",
            border: "1px solid #ddd",
            background: "#f8f8f8",
            borderRadius: 6,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              whiteSpace: "pre-wrap",
              color: "#111",
            }}
          >
            {comment}
          </p>
        </div>

        <p style={{ margin: "16px 0 0 0", fontSize: "13px", color: "#666" }}>
          This is an automatic notification. Check your dashboard for full
          details.
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <a
          href="https://ayberkyavas.com/studio"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#000000",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.3px",
            border: "1px solid #000",
          }}
        >
          View Dashboard →
        </a>
      </div>
      {/* Footer */}
      <div
        style={{
          padding: "12px 32px",
          textAlign: "center",
          fontSize: "12px",
          color: "#999",
        }}
      >
        © {new Date().getUTCFullYear()} https://ayberkyavas.com • All rights
        reserved.
      </div>
    </div>
  );
}
