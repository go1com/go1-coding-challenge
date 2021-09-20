const getCourseIdsCompletedBy1Learner = require('../index');
describe("Return a list of course Id's that have only been completed by 1 Learner.", function() {
    it("dataset 1", function() {
        const dataset1 = require('../data/dataset1.json');
        expect(getCourseIdsCompletedBy1Learner(dataset1)).toEqual([
            "Course-0001",
            "Course-0002",
            "Course-0003",
            "Course-0004"
        ]);
    });

    it("dataset 2", function() {
        const dataset2 = require('../data/dataset2.json');
        expect(getCourseIdsCompletedBy1Learner(dataset2)).toEqual([
            "Course-0001",
            "Course-0004"
        ]);
    });

    it("dataset 3", function() {
        const dataset3 = require('../data/dataset3.json');
        expect(getCourseIdsCompletedBy1Learner(dataset3)).toEqual([
            "Course-0001",
            "Course-0002",
            "Course-0003"
        ]);
    });

    it("dataset 4", function() {
        const dataset4 = require('../data/dataset4.json');
        expect(getCourseIdsCompletedBy1Learner(dataset4)).toEqual([
            "Course-0001",
            "Course-0002",
            "Course-0004"
        ]);
    });

    it("dataset 5", function() {
        const dataset5 = require('../data/dataset5.json');
        expect(getCourseIdsCompletedBy1Learner(dataset5)).toEqual([
            "Course-0001",
            "Course-0007"
        ]);
    });
});