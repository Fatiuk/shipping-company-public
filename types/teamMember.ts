export default interface TeamMemberI {
  name: string;
  position: string;
  positionSlug: string;
  description: string;
  socialLinks?: {
    linkedin?: string;
    email?: string;
    phone?: string;
  };
}
