const api = {
  hostname: 'https://api.github.com/repos/chloe7303/github-issues-section',
  acceptType: 'application/vnd.github+json',
  async getLabels() {
    const res = await fetch(`${this.hostname}/labels`);
    return await res.json();
  },
  async createLabel(data, token) {
    const res = await fetch(`${this.hostname}/labels`, {
      method: 'POST',
      headers: {
        Accept: this.acceptType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  },
  async updateLabel(data, token, name) {
    const res = await fetch(`${this.hostname}/labels/${name}`, {
      method: 'PATCH',
      headers: {
        Accept: this.acceptType,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  },
  async deleteLabel(token, name) {
    const res = await fetch(`${this.hostname}/labels/${name}`, {
      method: 'DELETE',
      headers: {
        Accept: this.acceptType,
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  },
};

export default api;
