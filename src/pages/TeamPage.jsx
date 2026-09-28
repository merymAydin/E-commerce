import Gokhan from "../assets/d01ea0d5-7057-49ed-b0bd-7a2d59b45df4.png"
import me from "../assets/08e455fe112b5aa889f8276e41832a747a9bda45 (1).png"

const TeamPage = () => {
    const teamMembers = [
        {
            name: "Gökhan Özdemir",
            role: "Project Manager",
            image: Gokhan,
            description: "The quick fox jumps over the lazy dog",
        },
        {
            name: "Meryem Aydın",
            role: "Full Stack Developer",
            image: me,
            description: "The quick fox jumps over the lazy dog",
        },
    ];
    return (
        <div className="py-16 bg-[#F9F9F9]">
            <h1 className="text-xl md:text-4xl font-bold text-center mb-4">
                Meet Our Team
            </h1>
            <p className="text-[#737373] text-xs md:text-sm text-center max-w-[280px] mx-auto mb-12">
                Problems trying to resolve the conflict between the two major realms
                of Classical physics: Newtonian mechanics
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {teamMembers.map((m) => {
                    return (
                        <div
                            key={m.name}
                            className="flex flex-col items-center w-[280px] md:w-[280px] bg-white px-8 py-10"
                        >
                            <img
                                src={m.image}
                                alt={m.name}
                                className="w-36 h-36 object-cover rounded-full"
                            />

                            <p className="text-[#23A6F0] font-bold mt-4">
                                {m.role}
                            </p>

                            <p className="font-bold text-[#252B42] mt-3">
                                {m.name}
                            </p>

                            <p className="text-[#737373] text-sm text-center mt-3">
                                {m.description}
                            </p>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TeamPage
