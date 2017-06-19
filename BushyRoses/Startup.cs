using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BushyRoses.Startup))]
namespace BushyRoses
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
