import type { ReactNode } from 'react';
import '../../styles/tokens.css'

export type CardProps = {
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function Card({ title, description, footer, children, className }: CardProps) {
  return (
    <section
      className={className}
      style={{
        background: 'var(--semantic-mode-1-cta-primary-base)',
        color: 'var(--poc-text)',
        border: '1px solid var(--poc-border)',
        borderRadius: 'var(--poc-radius)',
        boxShadow: 'var(--poc-shadow)',
        padding: 16,
        maxWidth: 420,
      }}
    >
      {(title || description) && (
        <header style={{ marginBottom: 12 }}>
          {title && (
            <div style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>
              {title}
            </div>
          )}
          {description && (
            <div style={{ marginTop: 6, color: 'var(--poc-muted)', fontSize: 13, lineHeight: 1.4 }}>
              {description}
            </div>
          )}
        </header>
      )}

      {children && <div style={{ fontSize: 14, lineHeight: 1.6 }}>{children}</div>}

      {footer && (
        <footer
          style={{
            marginTop: 14,
            paddingTop: 12,
            borderTop: '1px solid var(--poc-border)',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 8,
          }}
        >
          {footer}
        </footer>
      )}
    </section>
  );
}

