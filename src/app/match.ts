
export class Match {
    public matchId: number;
    public matchDate: Date;
    public matchTime: Date;
    public matchGroup: string;
    public teamOneName: string;
    public teamTwoName: string;
    // public flagTeamOne: string;
    // public flagTeamTwo: string;

    constructor(matchId, matchDate, matchTime, matchGroup, teamOneName, teamTwoName
        // , flagTeamOne, flagTeamTwo
    ) {
        this.matchId = matchId;
        this.matchDate = matchDate;
        this.matchTime = matchTime;
        this.matchGroup = matchGroup;
        this.teamOneName = teamOneName;
        this.teamTwoName = teamTwoName;
        // this.flagTeamOne = flagTeamOne;
        // this.flagTeamTwo = flagTeamTwo;
    }

}
