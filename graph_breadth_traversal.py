def graphBreadthFirstTraversal(graph, source):
    queue = [source];
    values = [];
    queueLength = len(queue);

    while (queueLength > 0):
        current = queue[0];
        values.append(current);
        queue = queue[1:queueLength];
        print(queue);

        for neighbor in graph[current]:
            queue.append(neighbor);
        
        queueLength = len(queue);

    return values;

graph = {
  "a": ["b", "c"],
  "b": ["d"],
  "c": ["e"],
  "d": ["f"],
  "e": [],
  "f": [],
};

print(graphBreadthFirstTraversal(graph, "a"));