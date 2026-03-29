// Duração do cookie em ms — deve estar em sync com JWT_EXPIRES_IN (1d)
export const COOKIE_MAX_AGE = 24 * 60 * 60 * 1000;

/**
 * Opções padrão para cookies de autenticação.
 * - httpOnly: protege contra XSS (JS do browser não acessa)
 * - secure: envia apenas via HTTPS em produção
 * - sameSite: protege contra CSRF
 */
export const cookieOptions = {
  httpOnly: true,
  secure: false,       // desativa secure temporariamente para localhost(Somente para teste, não vai para main)
  sameSite: 'lax',     // permite envio do cookie cross-site em dev
  maxAge: COOKIE_MAX_AGE,
};
