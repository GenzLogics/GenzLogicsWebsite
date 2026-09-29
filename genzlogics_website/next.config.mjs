const nextConfig = {
  async redirects() {
    return [{ source: "/work", destination: "/projects", permanent: true }];
  },
};

export default nextConfig;
