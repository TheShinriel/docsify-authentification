export function getFile(target, headers) {
  return Promise
    .resolve()
    .then(() => fetch(target,
      {
        method: "GET",
        headers,
      }
    ))
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
      }
      return response.text();
    })
}

export function install(hook, vm) {
  const config = Object.assign({}, {
    tag: 'withAuth',
    headers: {} // X-API-Key, Authorization, ... ?
	}, vm.config.authentication);

  hook.beforeEach(function (content, next) {
    const reg = new RegExp(`\\[${config.tag}\\]\\(([^)]+)\\)`, 'i');
    const result = content.match(reg);

    console.log("content", content);

    if (result && result[1]) {
      const targetFile = result[1];
      getFile(targetFile, config.headers)
        .then((data) => next(content.replace(reg, `\n ${data} \n`)))
        .catch((err) => console.error(err));
    } else {
      next(content);
    }
  });
}
