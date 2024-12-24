const paths = {
    home() {
        return "/"
    },
    settings() {
        return "/settings"
    },
    login() {
        return "/auth/login"
    },
    register() {
        return "/auth/register"
    },
    passwordReset() {
        return "/auth/reset-password"
    },
    newPassword() {
        return "/auth/new-password"
    },
    newVerification() {
        return "/auth/new-verification"
    },
    error() {
        return "/auth/error"
    },
    topicShow(topicSlug: string) {
        return `/topics/${topicSlug}`
    },
    postCreate(topicSlug: string) {
        return `/topics/${topicSlug}/posts/new`
    },

    postShow(topicSlug: string, postId: string) {
        return `/topics/${topicSlug}/posts/${postId}`
    }
}

export default paths;