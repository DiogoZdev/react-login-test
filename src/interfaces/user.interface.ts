export interface User {
  /**
   * User ID.
   */
  id?: number;

  /**
   * User's full name.
   */
  name: string;

  /**
   * User's ID document.
   */
  document: string;

  /**
   * User's e-mail.
   */
  email: string;

  /**
   * User's phone.
   */
  phone: string;
}