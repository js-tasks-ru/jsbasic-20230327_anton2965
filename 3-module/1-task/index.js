function namify(users) {
  return users.filter(user => user.name).map(user => `${user.name}`);
}
