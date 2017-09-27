export class Project {
    constructor(public id: number,
                public project_name: string,
                public description: string,
                public websiteUrl: string,
                public imageUrl: string,
                public githubUrl: string,
                public stacks: any[]) { }
    }
