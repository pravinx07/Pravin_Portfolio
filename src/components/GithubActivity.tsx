import { GitHubCalendar } from 'react-github-calendar';
const GithubActivity = () => {
  return (
    <section className="py-20" style={{ background: '#040d17' }}>
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <p className="text-sm font-bold uppercase tracking-widest text-center mb-3" style={{ color: '#22d3ee' }}>
          — My Contributions
        </p>
        <h2 className="section-title text-center mb-10">GitHub <span>Activity</span></h2>
        
        <div className="p-4 md:p-8 rounded-2xl transition-all duration-300 w-full overflow-hidden flex justify-center items-center"
          style={{
            background: 'rgba(7,18,32,0.8)',
            border: '1px solid rgba(34,211,238,0.1)',
          }}>
          <div className="w-full flex justify-center custom-scrollbar overflow-x-auto pb-4">
            <GitHubCalendar 
              username="pravinX07" 
              blockSize={14}
              blockMargin={5}
              colorScheme="dark"
              theme={{
                dark: ['rgba(34,211,238,0.05)', 'rgba(34,211,238,0.3)', 'rgba(34,211,238,0.5)', 'rgba(34,211,238,0.7)', '#22d3ee']
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
