
export class Match {
    public matchDate: Date;
    public matchTime: Date;
    public matchGroup: string;
    public teamOneName: string;
    public teamTwoName: string;

    constructor(matchDate, matchTime, matchGroup, teamOneName, teamTwoName ) {
        this.matchDate = matchDate;
        this.matchTime = matchTime;
        this.matchGroup = matchGroup;
        this.teamOneName = teamOneName;
        this.teamTwoName = teamTwoName;
    }

}
