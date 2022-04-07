const tree = {
  val: 'a',
  chileren: [
    {
      val: 'b',
      chileren: [
        {
          val: 'd',
          chileren: []
        }
      ]
    },
    {
      val: 'c',
      chileren: [
        {
          val: 'e',
          chileren: []
        }
      ]
    }
  ]
}

const dfs = (root) => {
  console.log(root.val)
  root.chileren.forEach(dfs)
}

dfs(tree)

const bfs = (root) => {
  let queue = [], res = []
  queue.push(root)
  res.push(root.val)

  while(queue.length) {
    let front = queue.shift()
    front.chileren.forEach(node => {
      res.push(node.val)
      queue.push(node)
    })
  }

  console.log(res)
}

bfs(tree)
