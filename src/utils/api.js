const getGlobalTimeline = () => {
  fetch('https://corona-api.com/timeline')
    .then(res => res.json())
    .catch(e => console.warn(e));
};

export { getGlobalTimeline };