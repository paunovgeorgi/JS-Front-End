function solve(input) {
    const count = input.shift();
    const board = input.splice(0, count).reduce((acc, curr) => {
        const [assignee, taskId, title, status, points] = curr.split(':');
        const existingAssignee = acc.find(a => a.assignee === assignee);
        if (existingAssignee) {
            existingAssignee.tasks.push({taskId, title, status, points: Number(points)});
        }
        else{
        const currAssignee = {
            assignee,
            tasks: [{taskId, title, status, points: Number(points)}]
        }
        acc.push(currAssignee);
    }
        return acc;
    }, []);
    
    for (const line of input) {
        const tokens = line.split(':');
        const command = tokens[0];
        let currAssignee;
        switch (command) {
          case "Add New":
            currAssignee = board.find(a => a.assignee === tokens[1]);
            if (currAssignee) {
                currAssignee.tasks.push({taskId: tokens[2], title: tokens[3], status: tokens[4], points: Number(tokens[5])})
            }
            else{console.log(`Assignee ${tokens[1]} does not exist on the board!`);}
            break;
          case "Change Status":
            currAssignee = board.find(a => a.assignee === tokens[1]);
            if (!currAssignee) {
                console.log(`Assignee ${tokens[1]} does not exist on the board!`);
                break;
            }
            let currTask = currAssignee.tasks.find(t => t.taskId === tokens[2]);
            if (!currTask) {
                console.log(`Task with ID ${tokens[2]} does not exist for ${tokens[1]}!`);
                break;
            }
            currTask.status = tokens[3];
            break;
          case "Remove Task":
            let index = tokens[2];
            currAssignee = board.find(a => a.assignee === tokens[1]);
            if (!currAssignee) {
                console.log(`Assignee ${tokens[1]} does not exist on the board!`);
                break;
            }
            if (index < 0 || index > currAssignee.tasks.length-1) {
                console.log(`Index is out of range!`);
                break;
            }
            currAssignee.tasks.splice(index, 1);
            break;
        }
    }

    let todoPoints = 0;
    let inProgress = 0;
    let codeReview = 0;
    let donePoints = 0;

    for (const assignment of board) {
       assignment.tasks.forEach(t => {
        if (t.status === 'ToDo') { todoPoints += t.points;}
        else if (t.status === 'In Progress') { inProgress += t.points;}
        else if (t.status === 'Code Review') { codeReview += t.points;}
        else {donePoints += t.points};
       }) 
    }

    console.log(`ToDo: ${todoPoints}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${donePoints}pts`);
    if (donePoints >= inProgress + todoPoints + codeReview) {
        console.log('Sprint was successful!');
    }else{console.log('Sprint was unsuccessful...');}

}



solve(    [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);