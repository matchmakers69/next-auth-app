const paths = {
  home() {
    return "/";
  },
  settings() {
    return "/settings";
  },
  login() {
    return "/auth/login";
  },
  register() {
    return "/auth/register";
  },
  passwordReset() {
    return "/auth/reset-password";
  },
  newPassword() {
    return "/auth/new-password";
  },
  newVerification() {
    return "/auth/new-verification";
  },
  error() {
    return "/auth/error";
  },
  topics() {
    return `/topics`;
  },
  topicComments() {
    return `/topics/comments`;
  },
  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },

  postShow(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
  subscriptions() {
    return `/subscriptions`;
  },
  features() {
    return `/features`;
  },
  financeTrackerOverview() {
    return `/finance-tracker/overview`;
  },
  financeTrackerBudget() {
    return `/finance-tracker/budget`;
  },
  financeTrackerCashflow() {
    return `/finance-tracker/cashflow`;
  },
  adminDashboard() {
    return `/administrator/dashboard`;
  },
  adminTypescript() {
    return `/administrator/typescript`;
  },
  adminBlog() {
    return `/administrator/blog`;
  },
  adminBlogPostShow(blogSlug: string) {
    return `/administrator/blog/${blogSlug}`;
  }
};

export default paths;
